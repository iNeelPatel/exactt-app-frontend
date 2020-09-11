import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
    customerPermission: {
      read: boolean;
      write: boolean;
   };
}
