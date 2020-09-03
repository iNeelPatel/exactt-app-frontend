import { OrganizationState } from "../../redux/types/OrganizationTypes";
import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   organization: OrganizationState;
   setOrganization: (formData: any) => any;
   getStatus: () => any;
}

export interface OrgForm {
   prefix: string;
   acc_no: string;
   bank_name: string;
   branch: string;
   city: any;
   contact_peron: string;
   gst: string;
   ifsc: string;
   line1: string;
   line2: string;
   name: string;
   phone: string;
   state: any;
   zip: string;
   email: string;
   acc_name: string;
}
