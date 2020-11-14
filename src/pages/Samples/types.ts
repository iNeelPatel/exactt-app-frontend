import { RouteComponentProps } from "react-router-dom";
import { Sample } from "../../redux/types/SampleTypes";

export interface Props extends RouteComponentProps {
   samplePermission: {
      read: boolean;
      write: boolean;
   };
   samples: Sample[];
   getSamples: () => any;
}

export interface SampleListProps {
   navigationHistory: any;
   samples: Sample[];
   prefix: string;
}

export interface SampleCardProps {
   sample: Sample;
   onClick: () => any;
   prefix: string;
}
