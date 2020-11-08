import { RouteComponentProps } from "react-router-dom";
import { Parameter } from "../../../redux/types/ParameterTypes";

export interface Props extends RouteComponentProps {
   match: any;
   searchedParameters: Parameter[] | [];
   sampleGroup: any;
   searchParameters: (keywrod: string) => any;
   createSampleGroup: (data: any) => any;
   getSampleGroup: (objectId: any) => any;
   updateSampleGroup: (data: any) => any;
}

export interface AddTestMethodFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
   onSearchParameter: (keywrod: string) => any;
   searchedParameters: Array<any>;
   edit: boolean;
   editData: any;
}
