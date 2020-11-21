// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import SearchIcon from "@atlaskit/icon/glyph/search";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from "@atlaskit/textfield";

// ====================================== File imports ======================================
import { Breadcrumb, ScreenLoader } from "../../components";
import AppState from "../../redux/types";
import { Props } from "./types";
import SampleList from "./SampleList";
import { getSamples } from "../../redux/actions/SamplesActions";

const breadcrumbItems = [
   { path: "/", name: "Dashboard" },
   { path: "/sample", name: "Samples" },
];

const SampleScreen = (props: Props) => {
   const { samplePermission, getSamples, samples } = props;
   const [loading, setLoading] = useState(true);

   const focus = async () => {
      await getSamples();
      setLoading(false);
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen="Samples"
                  right={
                     <div style={{ display: "flex" }}>
                        <TextField placeholder="Search by sample ID" isCompact={true} />
                        <Button
                           iconBefore={<SearchIcon label="Search icon" size="small" />}
                           style={{ height: 38, marginLeft: 7 }}
                           onClick={() => {}}
                        >
                           Search
                        </Button>
                        {samplePermission.write && (
                           <Button
                              iconBefore={<AddIcon label="Add icon" size="small" />}
                              type="submit"
                              style={{ height: 38, marginLeft: 7 }}
                              appearance="primary"
                              onClick={() => props.history.push("/sample/add")}
                           >
                              Add sample
                           </Button>
                        )}
                     </div>
                  }
               />
            </GridColumn>
            <GridColumn medium={12}>
               {loading ? <ScreenLoader /> : <SampleList samples={samples} navigationHistory={props.history} />}
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   samplePermission: state.user.user.role.permission.samples_id,
   samples: state.samples.samples,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getSamples }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleScreen);
