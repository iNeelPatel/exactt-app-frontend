import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   sampleParameterPermission: {
      read: boolean;
      write: boolean;
   };
}
