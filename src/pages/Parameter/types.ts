import { RouteComponentProps } from "react-router-dom";
import { Parameter } from "../../redux/types/ParameterTypes";

export interface Props extends RouteComponentProps {
   sampleParameterPermission: {
      read: boolean;
      write: boolean;
   };
   getParameters: () => any;
   parameters: Parameter[];
   deleteParameter: (arg0: any) => any;
}
