import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   sampleGroupPermission: {
      read: boolean;
      write: boolean;
   };
}
