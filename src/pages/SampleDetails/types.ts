import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   sampleDetailPermission: {
      read: boolean;
      write: boolean;
   };
}
