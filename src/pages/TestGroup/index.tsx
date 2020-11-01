// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { connect } from "react-redux";
import DynamicTable from "@atlaskit/dynamic-table";
import EditIcon from "@atlaskit/icon/glyph/edit";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Breadcrumb, DeleteButton } from "../../components";
import { Props } from "./types";
import AppState from "../../redux/types";
import { getTestGroups } from "../../redux/actions/TestGroupsActions";
import { TestGroup } from "../../redux/types/TestGroupsTypes";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/testGroup", name: "Test Group" },
];

const TestGroupPage = (props: Props) => {
   const [loading, setLoading] = useState(true);
   const { sampleGroupPermission } = props;
   const [rows, setRows] = useState<any>([]);

   const { getTestGroups, testGroups } = props;

   const head: any = {
      cells: [
         {
            key: "code",
            width: 15,
            content: "Code",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "name",
            content: "Name",
            isSortable: true,
            shouldTruncate: false,
         },
         {
            key: "extra_fields",
            content: "Extra fields",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "action",
            content: "",
            width: sampleGroupPermission.write ? 17 : 1,
            isSortable: false,
            shouldTruncate: false,
         },
      ],
   };

   useEffect(() => {
      const createRows: any = testGroups?.map((testGroup: TestGroup) => ({
         key: `row`,
         cells: [
            {
               key: `cell-code-${testGroup.objectId}`,
               content: <div>{testGroup.code}</div>,
            },
            {
               key: `cell-name-${testGroup.objectId}`,
               content: <div style={{ height: 34, display: "flex", alignItems: "center" }}>{testGroup.name}</div>,
            },

            {
               key: `cell-custome-fields-${testGroup.objectId}`,
               content: <div>{testGroup?.custom_field?.length > 0 ? testGroup.custom_field?.toString() : "-"}</div>,
            },
            {
               key: `cell`,
               content: sampleGroupPermission.write && (
                  <div style={{ display: "flex" }}>
                     <Button
                        iconBefore={<EditIcon label="Edit icon" size="small" />}
                        appearance="link"
                        onClick={() => props.history.push(`/organizationsettings/testgroup/edit/${testGroup.objectId}`)}
                     >
                        Edit
                     </Button>
                     <DeleteButton onClick={() => props.history.push(`/organizationsettings/testgroup/`)} />
                  </div>
               ),
            },
         ],
      }));

      setRows(createRows);
   }, [testGroups, props.history, sampleGroupPermission]);

   const focus = async () => {
      await getTestGroups();
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
                  screen="Test Group"
                  right={
                     sampleGroupPermission.write && (
                        <Button
                           iconBefore={<AddIcon label="Add icon" size="small" />}
                           type="submit"
                           style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                           appearance="primary"
                           onClick={() => props.history.push("/organizationsettings/testgroup/add")}
                        >
                           Add test group
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
   sampleGroupPermission: state.user.user.role.permission.samples_group,
   testGroups: state.testGroup.testGroups,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getTestGroups }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestGroupPage);
