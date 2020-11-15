import { RouteComponentProps } from "react-router-dom";
import { Customer } from "../../../redux/types/CustomerTypes";
import { SampleDetails } from "../../../redux/types/SampleDetailsTypes";
import { TestGroup } from "../../../redux/types/TestGroupsTypes";
import { User } from "../../../redux/types/UserTypes";

export interface Props extends RouteComponentProps {
   match: any;
   searchedCustomers: Customer[] | [];
   searchedTestGroups: TestGroup[] | [];
   searchedSamplesDetails: SampleDetails[] | [];
   users: User[] | undefined;
   getUsers: () => any;
   searchTestGroups: (keyword: string) => any;
   searchCustomers: (keyword: string) => any;
   searchSamplesDetails: (keywrod: string) => any;
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
   searchedSamplesDetails: SampleDetails[] | undefined;
   userOptions: any[];
   onSearchSamplesDetails: (keywrod: string) => any;
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}

export interface TestDetailsFormProps {
   hodOptions: any[];
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}
