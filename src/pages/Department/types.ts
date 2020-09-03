import { DepartmentState } from "../../redux/types/DepartmentTypes";
import { RouteComponentProps } from "react-router-dom";

export interface Props extends DepartmentState, RouteComponentProps {
   getDepartments: () => any;
   createDepartment: (arg0: CreateDepartmentForm) => any;
   updateDepartment: (arg0: any) => any;
}

export interface CreateDepartmentForm {
   name: string;
}
