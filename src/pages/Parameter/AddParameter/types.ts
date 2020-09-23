import { RouteComponentProps } from "react-router-dom";
import { DepartmentState } from "../../../redux/types/DepartmentTypes";

export interface Props extends RouteComponentProps, DepartmentState {
   match: any;
   getDepartments: () => any;
}

export interface AddParameterFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
   departmentList: Array<{ lable: string; value: string }>;
}
