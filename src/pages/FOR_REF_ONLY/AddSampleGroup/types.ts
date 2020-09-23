import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   match: any;
}

export interface AddSampleGroupFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}
