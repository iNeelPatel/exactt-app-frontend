// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { colors } from "@atlaskit/theme";
import SampleCard from "./SampleCard";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { SampleListProps } from "./types";
import AppState from "../../redux/types";

const styles = {
   mainCard: {
      background: colors.N20,
      borderRadius: 4,
      padding: 5,
   },
   card: {
      margin: 5,
      marginBottom: 8,
      background: colors.N0,
      padding: 5,
      borderRadius: 3,
   },
};

const SampleList = (props: SampleListProps) => {
   const { samples, prefix } = props;
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <div style={styles.mainCard}>
                  {samples.map((sample) => (
                     <SampleCard
                        sample={sample}
                        prefix={prefix}
                        onClick={() => props.navigationHistory.push(`/sample/id/${prefix}-${sample.sampleId}`)}
                     />
                  ))}
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   prefix: state.orgnization.details.prefix,
});

export default connect(mapStateToProps)(SampleList);
