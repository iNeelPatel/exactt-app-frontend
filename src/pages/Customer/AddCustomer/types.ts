import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   match: any;
   createCustomers: (arg0: any) => any;
}

export interface AddCustomerProps {
   onSubmit: (arg0: any) => void;
   onBack: () => void;
}
