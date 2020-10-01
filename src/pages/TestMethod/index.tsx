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
   { path: "/organizationsettings/testmethod", name: "Test Method" },
];

const TestMethod = (props: Props) => {
   const { testMethodPermission } = props;

   const head: any = {
      cells: [
         {
            key: "name",
            content: "Name",
            width: "30",
            isSortable: true,
            shouldTruncate: true,
         },
         {
            key: "parameters",
            content: "Parameters",
            isSortable: false,
            shouldTruncate: false,
         },
         {
            key: "action",
            content: "",
            width: testMethodPermission.write ? 17 : 1,
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
               key: `group_name`,
               content: <div style={{ height: 34, display: "flex", alignItems: "center" }}>pH</div>,
            },
            {
               key: `parameters`,
               content: <div>pH, New, Test</div>,
            },
            {
               key: `cell`,
               content: testMethodPermission.write && (
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
                  screen="Test Methods"
                  right={
                     testMethodPermission.write && (
                        <Button
                           iconBefore={<AddIcon label="Add icon" size="small" />}
                           type="submit"
                           style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                           appearance="primary"
                           onClick={() => props.history.push("/organizationsettings/testmethod/add")}
                        >
                           Add test method
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
   testMethodPermission: state.user.user.role.permission.samples_method,
});

export default connect(mapStateToProps)(TestMethod);
