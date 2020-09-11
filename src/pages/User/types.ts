import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   userPermission: {
      read: boolean;
      write: boolean;
   };
}
