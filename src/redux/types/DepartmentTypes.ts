export interface DepartmentState {
   departments: Departments[];
}

export interface Departments {
   name: string;
   createdAt: string;
   updatedAt: string;
   objectId: string;
}
