import { RouteComponentProps } from "react-router-dom";
import { Parameter } from "../../redux/types/Parameter";

export interface Props extends RouteComponentProps {
   sampleParameterPermission: {
      read: boolean;
      write: boolean;
   };
   getParameters: () => any;
   parameters: Parameter[];
}
