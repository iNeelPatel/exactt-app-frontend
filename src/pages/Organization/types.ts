import { OrganizationState } from "../../redux/types/OrganizationTypes";

interface SetOrgForm {
   acc_no: string;
   bank_name: string;
   branch: string;
   city: object;
   contact_peron: string;
   gst: string;
   ifsc: string;
   line1: string;
   line2: string;
   name: string;
   perfix: string;
   phone: string;
   state: string;
   zip: string;
   logo: any;
   email: string;
   acc_name: string;
}

export interface Props {
   organization: OrganizationState;
   setOrganization: (formData: any) => any;
}

export interface OrgForm {
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
   perfix: string;
   phone: string;
   state: any;
   zip: string;
   email: string;
   acc_name: string;
}
