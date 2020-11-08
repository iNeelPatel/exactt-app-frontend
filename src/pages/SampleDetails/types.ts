import { RouteComponentProps } from "react-router-dom";
import { SampleDetails } from "../../redux/types/SampleDetailsTypes";

export interface Props extends RouteComponentProps {
   getSamplesDetails: () => any;
   sampleDetailPermission: {
      read: boolean;
      write: boolean;
   };
   samplesDetails: SampleDetails[] | undefined;
}
