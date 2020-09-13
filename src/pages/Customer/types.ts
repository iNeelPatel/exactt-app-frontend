import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   getCustomers: () => any;
   customerPermission: {
      read: boolean;
      write: boolean;
   };
}
