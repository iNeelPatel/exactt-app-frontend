import { RouteComponentProps } from "react-router-dom";
import { Customer } from "../../../redux/types/CustomerTypes";
import { Parameter } from "../../../redux/types/ParameterTypes";
import { SampleDetails } from "../../../redux/types/SampleDetailsTypes";
import { SampleGroup } from "../../../redux/types/SampleGroupTypes";
import { TestGroup } from "../../../redux/types/TestGroupsTypes";
import { User } from "../../../redux/types/UserTypes";

export interface Props extends RouteComponentProps {
   match: any;
   searchedCustomers: Customer[] | [];
   searchedTestGroups: TestGroup[] | [];
   searchedSamplesDetails: SampleDetails[] | [];
   users: User[] | undefined;
   searchedSampleGroup: SampleGroup[] | [];
   searchedParameters: Parameter[] | [];
   getUsers: () => any;
   searchParameters: (keyword: string) => any;
   searchSampleGroup: (keyword: string) => any;
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
   isNewSample: boolean;
   hodOptions: any[];
   searchedSampleGroup: SampleGroup[] | undefined;
   searchedParameters: Parameter[] | undefined;
   sampleDetails: any;
   onSearchParameters: (keyword: string) => any;
   onSearchSampleGroup: (keyword: string) => any;
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}
