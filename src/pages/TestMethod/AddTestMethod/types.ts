import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   match: any;
}

export interface AddTestMethodFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}
