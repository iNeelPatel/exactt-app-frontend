import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   samplePermission: {
      read: boolean;
      write: boolean;
   };
   match: any;
}
