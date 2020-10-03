import { RouteComponentProps } from "react-router-dom";
import { Customer } from "../../../redux/types/CustomerTypes";

export interface Props extends RouteComponentProps {
   match: any;
   customer: any;
}

export interface DetailsProps {
   customer: Customer;
}
