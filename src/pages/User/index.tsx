// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
import { Props } from "./types";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/user", name: "Users" },
];

const User = (props: Props) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen="Users"
                  right={
                     <Button
                        iconBefore={<AddIcon label="Add icon" size="small" />}
                        type="submit"
                        style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                        appearance="primary"
                        onClick={() => props.history.push("/organizationsettings/user/adduser")}
                     >
                        Add new user
                     </Button>
                  }
               />
            </GridColumn>
            <GridColumn medium={12}>User</GridColumn>
         </Grid>
      </Page>
   );
};

export default User;
