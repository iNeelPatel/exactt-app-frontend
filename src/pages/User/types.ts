import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   userPermission: {
      read: boolean;
      write: boolean;
   };
   getUsers: () => any;
   users: Array<object>;
}
