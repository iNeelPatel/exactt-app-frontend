import { RouteComponentProps } from "react-router-dom";
import { TestGroup } from "../../redux/types/TestGroupsTypes";

export interface Props extends RouteComponentProps {
   sampleGroupPermission: {
      read: boolean;
      write: boolean;
   };
   getTestGroups: () => any;
   testGroups: any;
   deleteTestGroup: (arg0: any) => any;
}
