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

export interface ReportDetailsProps {}

export interface ReportDetailProps {
   onSubmit: (arg0: object) => any;
   details: any;
}
