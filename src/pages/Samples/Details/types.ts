import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   samplePermission: {
      read: boolean;
      write: boolean;
   };
   organization: any;
   match: any;
}

export interface CustomerDetailsProps {
   customer: any;
}

export interface SampleDetailsProps {
   sampleDetails: any;
}

export interface TestDetailsProps {
   sampleDetails: any;
}

export interface ParameterDetailsProps {
   parameters: any;
}
