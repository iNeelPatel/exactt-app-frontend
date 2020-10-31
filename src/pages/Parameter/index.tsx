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
import AppState from "../../redux/types";
import { Props } from "./types";
import { Parameter } from "../../redux/types/Parameter";
import { getParameters } from "../../redux/actions/ParameterActions";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/parameter", name: "Parameters" },
];

const ParameterPage = (props: Props) => {
   const { sampleParameterPermission, getParameters, parameters } = props;
   const [loading, setLoading] = useState(true);
   const [rows, setRows] = useState([]);

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

   useEffect(() => {
      const createRows: any = parameters?.map((parameter: Parameter) => ({
         key: `row`,
         cells: [
            {
               key: `cell-parameter-name-${parameter.objectId}`,
               content: <div style={{ height: 34, display: "flex", alignItems: "center" }}>{parameter.name}</div>,
            },
            {
               key: `cell-parameter-unit-${parameter.objectId}`,
               content: <div>{parameter.unit}</div>,
            },
            {
               key: `cell-parameter-method-${parameter.objectId}`,
               content: <div>{parameter.method}</div>,
            },
            {
               key: `cellle.department`,
               content: <div>{parameter.department.name}</div>,
            },
            {
               key: `cell`,
               content: sampleParameterPermission.write && (
                  <div style={{ display: "flex" }}>
                     <Button
                        iconBefore={<EditIcon label="Edit icon" size="small" />}
                        appearance="link"
                        onClick={() => props.history.push(`/organizationsettings/parameter/edit/${parameter.objectId}`)}
                     >
                        Edit
                     </Button>
                     <DeleteButton onClick={() => props.history.push(`/organizationsettings/parameter`)} />
                  </div>
               ),
            },
         ],
      }));

      setRows(createRows);
   }, [parameters, props.history, sampleParameterPermission]);

   const focus = async () => {
      await getParameters();
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
   sampleParameterPermission: state.user.user.role.permission.samples_parameter,
   parameters: state.parameter.parameters,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getParameters }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParameterPage);
