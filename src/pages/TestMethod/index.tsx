// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
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
import { getSampleGroup } from "../../redux/actions/SampleGroupsActions";
import { SampleGroup } from "../../redux/types/SampleGroupTypes";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/testmethod", name: "Test Method" },
];

const TestMethod = (props: Props) => {
   const { testMethodPermission, getSampleGroup, sampleGroups } = props;
   const [loading, setLoading] = useState(true);
   const [rows, setRows] = useState([]);

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
            key: "parameters",
            content: "Parameters",
            isSortable: false,
            shouldTruncate: true,
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

   useEffect(() => {
      const createRows: any = sampleGroups?.map((testMethod: SampleGroup) => ({
         key: `row`,
         cells: [
            {
               key: `group-name-${testMethod.name}`,
               content: <div style={{ height: 34, display: "flex", alignItems: "center" }}>pH</div>,
            },
            // <div>pH, New, Test</div>
            {
               key: `parameters`,
               content: testMethod.parameters?.map((parameter) => (
                  <span style={{ marginRight: 3 }}>
                     <Lozenge appearance="default">{parameter.parameter.name}</Lozenge>
                  </span>
               )),
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
      }));

      setRows(createRows);
   }, [sampleGroups, props.history, testMethodPermission]);

   const focus = async () => {
      await getSampleGroup();
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
   testMethodPermission: state.user.user.role.permission.samples_method,
   sampleGroups: state.sampleGroup.sampleGroups,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getSampleGroup }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestMethod);
