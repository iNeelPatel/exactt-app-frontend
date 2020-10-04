import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   match: any;
}

export interface BasicDetailsFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}

export interface PreviewProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}

export interface SampleFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}

export interface TestDetailsFormProps {
   onBack: () => void;
   onSubmit: (arg0: any) => void;
}
