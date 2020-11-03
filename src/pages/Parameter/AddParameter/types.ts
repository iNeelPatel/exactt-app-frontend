import { RouteComponentProps } from "react-router-dom";
import { DepartmentState } from "../../../redux/types/DepartmentTypes";
import { Parameter } from "../../../redux/types/ParameterTypes";

export interface Props extends RouteComponentProps, DepartmentState {
   match: any;
   getDepartments: () => any;
   getParameter: (objectId: string) => any;
   createParameter: (data: Parameter) => any;
   updateParameter: (data: Parameter) => any;
   parameter: Parameter | undefined;
}

export interface AddParameterFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
   edit: boolean;
   editData: Parameter | undefined;
   departmentList: Array<{ lable: string; value: string }>;
}
