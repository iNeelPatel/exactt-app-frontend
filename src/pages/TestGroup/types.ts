import { RouteComponentProps } from "react-router-dom";
import { TestGroup } from "../../redux/types/TestGroups";

export interface Props extends RouteComponentProps {
   sampleGroupPermission: {
      read: boolean;
      write: boolean;
   };
   getTestGroups: () => any;
   testGroups: any;
}
