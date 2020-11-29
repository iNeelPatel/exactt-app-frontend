import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   userPermission: {
      read: boolean;
      write: boolean;
   };
   getUsers: () => any;
   deleteUser: (arg0: any) => any;
   users: Array<object>;
}
