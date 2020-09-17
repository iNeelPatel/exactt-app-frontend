import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {}

export interface AddSampleGroupForm {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}
