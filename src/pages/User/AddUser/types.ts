import { RouteComponentProps } from "react-router-dom";
import { DepartmentState } from "../../../redux/types/DepartmentTypes";

export interface Props extends RouteComponentProps, DepartmentState {
   getDepartments: () => any;
}

export interface AddUserFormProps {
   onBack: () => void;
   onSubmit: (userData: UserData) => void;
   departmentList: Array<{ lable: string; value: string }>;
}

export interface UserData {
   username: string;
   name: string;
   email: string;
   countryCode: string;
   phone: string;
   department: string;
   password: string;
}
