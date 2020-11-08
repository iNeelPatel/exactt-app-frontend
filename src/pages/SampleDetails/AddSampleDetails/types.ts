import { RouteComponentProps } from "react-router-dom";
import { SampleDetails } from "../../../redux/types/SampleDetailsTypes";
import { SampleGroup } from "../../../redux/types/SampleGroupTypes";

export interface Props extends RouteComponentProps {
   match: any;
   searchSampleGroup: (keyword: string) => any;
   createSampleDetails: (arg0: any) => any;
   getSampleDetails: (objectId: any) => any;
   updateSampleDetails: (data: any) => any;
   searchedSampleGroup: SampleGroup[] | [];
   sampleDetails: SampleDetails | undefined;
}

export interface AddSampleDetailFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
   onSearchSampleGorup: (keyword: string) => any;
   searchedSampleGroup: SampleGroup[] | undefined;
   edit: boolean;
   editData: SampleDetails | undefined;
}
