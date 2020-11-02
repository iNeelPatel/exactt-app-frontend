import { RouteComponentProps } from "react-router-dom";
import { Parameter } from "../../../redux/types/ParameterTypes";

export interface Props extends RouteComponentProps {
   match: any;
   searchedParameters: Parameter[] | [];
   searchParameters: (keywrod: string) => any;
}

export interface AddTestMethodFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
   onSearchParameter: (keywrod: string) => any;
   searchedParameters: Array<any>;
}
