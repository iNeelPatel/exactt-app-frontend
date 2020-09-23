import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   match: any;
}

export interface AddSampleDetailFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}
