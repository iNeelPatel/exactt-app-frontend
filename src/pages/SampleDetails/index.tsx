// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { connect } from "react-redux";
import DynamicTable from "@atlaskit/dynamic-table";
import EditIcon from "@atlaskit/icon/glyph/edit";
import { bindActionCreators } from "redux";
import Lozenge from "@atlaskit/lozenge";

// ====================================== File imports ======================================
import { Breadcrumb, DeleteButton } from "../../components";
import AppState from "../../redux/types";
import { Props } from "./types";
import { getSamplesDetails } from "../../redux/actions/SamplesDetailsActions";
import { SampleDetails } from "../../redux/types/SampleDetailsTypes";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/sampledetail", name: "Sample Details" },
];

const SampleDetailScreen = (props: Props) => {
   const { sampleDetailPermission, getSamplesDetails, samplesDetails } = props;
   const [loading, setLoading] = useState(true);
   const [rows, setRows] = useState<any>([]);

   const focus = async () => {
      await getSamplesDetails();
      setLoading(false);
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const head: any = {
      cells: [
         {
            key: "name",
            content: "Name",
            width: "20",
            isSortable: true,
            shouldTruncate: true,
         },
         {
            key: "generic_name",
            content: "Generic name",
            isSortable: false,
            shouldTruncate: false,
         },
         {
            key: "test_method",
            content: "Test methods",
            isSortable: false,
            shouldTruncate: false,
         },
         {
            key: "action",
            content: "",
            width: sampleDetailPermission.write ? 17 : 1,
            isSortable: false,
            shouldTruncate: false,
         },
      ],
   };


   useEffect(() => {
      const createRows: any = samplesDetails?.map((sampleDetail: SampleDetails) => ({
         key: `row`,
         cells: [
            {
               key: `cell-name-${sampleDetail.objectId}`,
               content: <div>{sampleDetail.name}</div>,
            },
            {
               key: `cell-genericName-${sampleDetail.objectId}`,
               content: <div style={{ height: 34, display: "flex", alignItems: "center" }}>{sampleDetail.genericName}</div>,
            },

            {
               key: `parameters`,
               content: sampleDetail.sampleGroups?.map((sampleGroup: any) => (
                  <span style={{ marginRight: 3 }}>
                     <Lozenge appearance="default">{sampleGroup.name}</Lozenge>
                  </span>
               )),
            },
            {
               key: `cell`,
               content: sampleDetailPermission.write && (
                  <div style={{ display: "flex" }}>
                     <Button
                        iconBefore={<EditIcon label="Edit icon" size="small" />}
                        appearance="link"
                        onClick={() => props.history.push(`/organizationsettings/sampledetail/edit/${sampleDetail.objectId}`)}
                     >
                        Edit
                     </Button>
                     <DeleteButton onClick={() => props.history.push(`/organizationsettings/sampledetail/`)} />
                  </div>
               ),
            },
         ],
      }));

      setRows(createRows);
   }, [samplesDetails, props.history, sampleDetailPermission]);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen="Sample Details"
                  right={
                     sampleDetailPermission.write && (
                        <Button
                           iconBefore={<AddIcon label="Add icon" size="small" />}
                           type="submit"
                           style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                           appearance="primary"
                           onClick={() => props.history.push("/organizationsettings/sampledetail/add")}
                        >
                           Add sample detail
                        </Button>
                     )
                  }
               />
            </GridColumn>
            <GridColumn medium={12}>
               <DynamicTable
                  head={head}
                  rows={rows}
                  rowsPerPage={10}
                  defaultPage={1}
                  isFixedSize
                  isLoading={loading}
                  defaultSortKey="name"
                  defaultSortOrder="ASC"
                  onSort={() => console.log("onSort")}
                  onSetPage={() => console.log("onSetPage")}
               />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleDetailPermission: state.user.user.role.permission.samples_sample,
   samplesDetails: state.samplesDetails.samplesDetails,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getSamplesDetails }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleDetailScreen);
