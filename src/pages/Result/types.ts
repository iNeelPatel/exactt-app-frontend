import { RouteComponentProps } from "react-router-dom";
import { Sample, SampleResultParameters } from "../../redux/types/SampleTypes";

export interface Props extends RouteComponentProps {
   sampleResultPermission: {
      read: boolean;
      write: boolean;
   };
   match: any;
   sample: Sample | undefined;
}

export interface SampleDetailsProps {
   sampleDetails: Sample | undefined;
}

export interface ReportDetailsProps {}

export interface ReportDetailProps {
   onSubmit: (arg0: object) => any;
   parameters: SampleResultParameters[] | undefined;
}
