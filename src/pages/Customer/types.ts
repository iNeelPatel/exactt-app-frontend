import { RouteComponentProps } from "react-router-dom";
import { Customer } from "../../redux/types/CustomerTypes";

export interface Props extends RouteComponentProps {
   getCustomers: () => any;
   customerPermission: {
      read: boolean;
      write: boolean;
   };
   customers: Customer[];
}
