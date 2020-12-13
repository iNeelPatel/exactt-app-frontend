import { RouteComponentProps } from "react-router-dom";
import { Sample, SampleResultParameters } from "../../redux/types/SampleTypes";
import { User } from "../../redux/types/UserTypes";

export interface Props extends RouteComponentProps {
   sampleResultPermission: {
      read: boolean;
      write: boolean;
   };
   match: any;
   sample: Sample | undefined;
   users: User[] | undefined;
   getUsers: () => any;
}

export interface SampleDetailsProps {
   sampleDetails: Sample | undefined;
   sampleId: string;
}

export interface ReportDetailsProps {}

export interface ReportDetailProps {
   onSubmit: (arg0: object) => any;
   hodOptions: any[];
   parameters: SampleResultParameters[] | undefined;
}
