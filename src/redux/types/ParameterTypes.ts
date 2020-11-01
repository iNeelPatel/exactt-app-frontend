import { Departments } from "./DepartmentTypes";

export interface ParameterState {
   parameters: Parameter[] | [];
   parameter: Parameter | undefined;
}

export interface Parameter {
   createdAt: string;
   updatedAt: string;
   objectId: string;
   name: string;
   unit: string;
   method: string;
   department: Departments;
}
