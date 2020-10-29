import { RouteComponentProps } from "react-router-dom";

export interface Props extends RouteComponentProps {
   samplePermission: {
      read: boolean;
      write: boolean;
   };
}

export interface SampleListProps {
   navigationHistory: any;
   samples: Array<Object>;
}

export interface SampleCardProps {
   sample: Object;
   onClick: () => any;
}
