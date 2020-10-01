// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { connect } from "react-redux";
import DynamicTable from "@atlaskit/dynamic-table";
import EditIcon from "@atlaskit/icon/glyph/edit";

// ====================================== File imports ======================================
import { Breadcrumb, DeleteButton } from "../../components";
import AppState from "../../redux/types";
import { Props } from "./types";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/parameter", name: "Parameters" },
];

const Parameter = (props: Props) => {
   const { sampleParameterPermission } = props;

   const head: any = {
      cells: [
         {
            key: "name",
            content: "Name",
            isSortable: true,
            shouldTruncate: true,
         },
         {
            key: "unit",
            content: "Result unit",
            isSortable: false,
            shouldTruncate: false,
         },
         {
            key: "method",
            content: "Method",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "department",
            content: "Department",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "action",
            content: "",
            width: sampleParameterPermission.write ? 17 : 1,
            isSortable: false,
            shouldTruncate: false,
         },
      ],
   };

   const rows: any = [
      {
         key: `row`,
         cells: [
            {
               key: `parameter_name`,
               content: <div style={{ height: 34, display: "flex", alignItems: "center" }}>pH</div>,
            },
            {
               key: `parameter_unit`,
               content: <div>pH</div>,
            },
            {
               key: `cellle.method`,
               content: <div>as per IS:9012</div>,
            },
            {
               key: `cellle.department`,
               content: <div>Microbiology</div>,
            },
            {
               key: `cell`,
               content: sampleParameterPermission.write && (
                  <div style={{ display: "flex" }}>
                     <Button
                        iconBefore={<EditIcon label="Edit icon" size="small" />}
                        appearance="link"
                        onClick={() => props.history.push(`/organizationsettings/testgroup/edit/rendomid`)}
                     >
                        Edit
                     </Button>
                     <DeleteButton onClick={() => props.history.push(`/organizationsettings/testgroup/`)} />
                  </div>
               ),
            },
         ],
      },
   ];

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen="Parameters"
                  right={
                     sampleParameterPermission.write && (
                        <Button
                           iconBefore={<AddIcon label="Add icon" size="small" />}
                           type="submit"
                           style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                           appearance="primary"
                           onClick={() => props.history.push("/organizationsettings/parameter/add")}
                        >
                           Add parameter
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
                  // isLoading={loading}
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
   sampleParameterPermission: state.user.user.role.permission.samples_parameter,
});

export default connect(mapStateToProps)(Parameter);
