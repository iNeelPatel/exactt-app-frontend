import { RouteComponentProps } from "react-router-dom";
import { DepartmentState } from "../../../redux/types/DepartmentTypes";

export interface Props extends RouteComponentProps, DepartmentState {
   getDepartments: () => any;
}

export interface AddUserFormProps {
   onBack: () => void;
   departmentList: Array<{ lable: string; value: string }>;
}
