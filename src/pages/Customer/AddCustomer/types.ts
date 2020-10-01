import { RouteComponentProps } from "react-router-dom";
import { Customer } from "../../../redux/types/CustomerTypes";

export interface Props extends RouteComponentProps {
   match: any;
   customer: any;
   createCustomers: (arg0: any) => any;
   getCustomer: (arg0: string) => any;
   updateCustomers: (arg0: Customer) => any;
}

export interface AddCustomerProps {
   onSubmit: (arg0: any) => void;
   onBack: () => void;
   customer: Customer;
   edit: boolean;
}
