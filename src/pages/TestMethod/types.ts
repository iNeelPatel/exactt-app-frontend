import { RouteComponentProps } from "react-router-dom";
import { SampleGroup } from "../../redux/types/SampleGroupTypes";

export interface Props extends RouteComponentProps {
   testMethodPermission: {
      read: boolean;
      write: boolean;
   };
   sampleGroups: SampleGroup[] | undefined;
   getSampleGroups: () => any;
   deleteSampleGroup: (arg0: any) => any;
}
