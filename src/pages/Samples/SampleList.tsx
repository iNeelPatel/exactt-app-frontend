// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { colors } from "@atlaskit/theme";
import SampleCard from "./SampleCard";

// ====================================== File imports ======================================
import { SampleListProps } from "./types";

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
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <div style={styles.mainCard}>
                  <SampleCard sample={{}} onClick={() => props.navigationHistory.push("/sample/id/HTL-KSZ-201008043")} />
                  <SampleCard sample={{}} onClick={() => props.navigationHistory.push("/sample/id/HTL-KSZ-201008043")} />
                  <SampleCard sample={{}} onClick={() => props.navigationHistory.push("/sample/id/HTL-KSZ-201008043")} />
                  <SampleCard sample={{}} onClick={() => props.navigationHistory.push("/sample/id/HTL-KSZ-201008043")} />
                  <SampleCard sample={{}} onClick={() => props.navigationHistory.push("/sample/id/HTL-KSZ-201008043")} />
                  <SampleCard sample={{}} onClick={() => props.navigationHistory.push("/sample/id/HTL-KSZ-201008043")} />
                  <SampleCard sample={{}} onClick={() => props.navigationHistory.push("/sample/id/HTL-KSZ-201008043")} />
                  <SampleCard sample={{}} onClick={() => props.navigationHistory.push("/sample/id/HTL-KSZ-201008043")} />
                  <SampleCard sample={{}} onClick={() => props.navigationHistory.push("/sample/id/HTL-KSZ-201008043")} />
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default SampleList;
