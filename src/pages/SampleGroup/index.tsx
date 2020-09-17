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
import { Props } from "./types";
import AppState from "../../redux/types";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/samplegroup", name: "Sample Group" },
];

const SampleGroup = (props: Props) => {
   const { sampleGroupPermission } = props;
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

   const rows: any = [
      {
         key: `row`,
         cells: [
            {
               key: `cellnt.nameas`,
               content: <div>KSZ</div>,
            },
            {
               key: `cellme`,
               content: <div style={{ height: 34, display: "flex", alignItems: "center" }}>Kasez</div>,
            },

            {
               key: `cellle.name`,
               content: <div>New, Lic No.</div>,
            },
            {
               key: `cell`,
               content: sampleGroupPermission.write && (
                  <div style={{ display: "flex" }}>
                     <Button
                        iconBefore={<EditIcon label="Edit icon" size="small" />}
                        appearance="link"
                        onClick={() => props.history.push(`/organizationsettings/user/edit`)}
                     >
                        Edit
                     </Button>
                     <DeleteButton onClick={() => props.history.push(`/organizationsettings/user/`)} />
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
                  screen="Sample Group"
                  right={
                     sampleGroupPermission.write && (
                        <Button
                           iconBefore={<AddIcon label="Add icon" size="small" />}
                           type="submit"
                           style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                           appearance="primary"
                           onClick={() => props.history.push("/organizationsettings/samplegroup/add")}
                        >
                           Add sample group
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
   sampleGroupPermission: state.user.user.role.permission.samples_group,
});

export default connect(mapStateToProps)(SampleGroup);
