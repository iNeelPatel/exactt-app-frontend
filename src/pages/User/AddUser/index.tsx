// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { Props } from "./types";
import { Breadcrumb } from "../../../components";
import AddUserForm from "./AddUserForm";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/user", name: "Users" },
   { path: "/organizationsettings/user/adduser", name: "Add user" },
];

const AddUser = (props: Props) => {
   const handleBack = () => {
      props.history.goBack();
   };

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen="Add user" />
            </GridColumn>
            <GridColumn medium={7}>
               <AddUserForm onBack={handleBack} />
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default AddUser;
