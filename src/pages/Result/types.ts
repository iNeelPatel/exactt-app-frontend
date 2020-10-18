import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   sampleResultPermission: {
      read: boolean;
      write: boolean;
   };
   match: any;
}

export interface SampleDetailsProps {
   sampleDetails: any;
}