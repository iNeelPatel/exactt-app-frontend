import { RouteComponentProps } from "react-router-dom";
import { Sample } from "../../../redux/types/SampleTypes";

export interface Props extends RouteComponentProps {
   samplePermission: {
      read: boolean;
      write: boolean;
   };
   organization: any;
   match: any;
   prefix: string;
   sample: Sample | undefined;
   getSample: (sampleId: string) => any;
}

export interface Customer {
   objectId: string;
   phone: string;
   name: string;
   email: string;
   contact: any;
   address: {
      line1: string;
      line2: string;
      city: string;
      zip: string;
      state: string;
   };
}
export interface CustomerDetailsProps {
   customer: Customer | undefined;
}

export interface SampleDetailsProps {
   sampleDetails: Sample | undefined;
}

export interface TestDetailsProps {
   sampleDetails: Sample | undefined;
}

export interface ParameterDetailsProps {
   parameters: any;
}
