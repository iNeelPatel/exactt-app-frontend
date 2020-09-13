import { RouteComponentProps } from "react-router-dom";
import { DepartmentState } from "../../../redux/types/DepartmentTypes";
import { RoleItem } from "../../../redux/types/RoleTypes";

export interface Props extends RouteComponentProps, DepartmentState {
   getDepartments: () => any;
   createUser: (arg0: UserData) => any;
   getAccessRoleList: () => any;
   rolesList: RoleItem[];
   getUser: (id: string) => any;
   match: any;
   editUser: any;
}

export interface AddUserFormProps {
   onBack: () => void;
   onSubmit: (userData: UserData) => void;
   roleList: Array<{ lable: string; value: string }>;
   departmentList: Array<{ lable: string; value: string }>;
   edit: boolean;
   editUser: any;
}

export interface UserData {
   username: string;
   name: string;
   email: string;
   countryCode: string;
   phone: string;
   department: object;
   role: object;
}
