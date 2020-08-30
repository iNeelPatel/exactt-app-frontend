import { DepartmentState } from "../../redux/types/DepartmentTypes";

export interface Props extends DepartmentState {
   getDepartments: () => any;
   createDepartment: (arg0: CreateDepartmentForm) => any;
   updateDepartment: (arg0: any) => any;
}

export interface CreateDepartmentForm {
   name: string;
}
