// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import SearchIcon from "@atlaskit/icon/glyph/search";
import { connect } from "react-redux";
import TextField from "@atlaskit/textfield";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
import AppState from "../../redux/types";
import { Props } from "./types";
import SampleList from "./SampleList";

const breadcrumbItems = [
   { path: "/", name: "Dashboard" },
   { path: "/sample", name: "Samples" },
];

const Sample = (props: Props) => {
   const { samplePermission } = props;
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
               <SampleList samples={[]} navigationHistory={props.history} />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   samplePermission: state.user.user.role.permission.samples_id,
});

export default connect(mapStateToProps)(Sample);
