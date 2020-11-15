import { RouteComponentProps } from "react-router-dom";
import { Customer } from "../../../redux/types/CustomerTypes";
import { TestGroup } from "../../../redux/types/TestGroupsTypes";

export interface Props extends RouteComponentProps {
   match: any;
   searchedCustomers: Customer[] | [];
   searchedTestGroups: TestGroup[] | [];
   searchTestGroups: (keyword: string) => any;
   searchCustomers: (keyword: string) => any;
}

export interface BasicDetailsFormProps {
   searchedCustomers: Customer[] | undefined;
   searchedTestGroups: TestGroup[] | undefined;
   onBack: () => void;
   onSubmit: (arg0: any) => void;
   onSearchCustomers: (keyword: string) => any;
   onSearchTestGroups: (keyword: string) => any;
}

export interface PreviewProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}

export interface SampleFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}

export interface TestDetailsFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}
