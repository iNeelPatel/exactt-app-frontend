import { RouteComponentProps } from "react-router-dom";
import { TestGroup } from "../../../redux/types/TestGroupsTypes";

export interface Props extends RouteComponentProps {
   match: any;
   testGroup: TestGroup | undefined;
   createTestGroup: (arg0: TestGroup) => any;
   getTestGroup: (arg0: string) => any;
   updateTestGroup: (arg0: TestGroup) => any;
}

export interface AddTestGroupFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
   edit: boolean;
   editData: TestGroup | undefined;
}
