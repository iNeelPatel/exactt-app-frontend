import { RouteComponentProps } from "react-router-dom";
import { Sample, SampleResultParameters } from "../../../redux/types/SampleTypes";
import { User } from "../../../redux/types/UserTypes";

export interface Props extends RouteComponentProps {
   samplePermission: {
      read: boolean;
      write: boolean;
   };
   organization: any;
   match: any;
   prefix: string;
   sample: Sample | undefined;
   users: User[] | undefined;
   getUsers: () => any;
   getSample: (sampleId: string) => any;
   assignSample: (data: any) => any;
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
   parameters: SampleResultParameters[] | undefined;
   usersOptions: any[];
   assignSample: (data: any) => any;
}
