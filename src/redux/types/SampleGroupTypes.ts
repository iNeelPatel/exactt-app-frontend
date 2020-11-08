import { Parameter } from "./ParameterTypes";

export interface SampleGroupState {
   sampleGroups: SampleGroup[] | [];
   sampleGroup: SampleGroup | undefined;
   searchSampleGroup: SampleGroup[] | [];
}

export interface SampleGroup {
   createdAt: string;
   updatedAt: string;
   objectId: string;
   name: string;
   sampleGroupParameter: any;
   parameters?: Array<SampleGroupParameter>;
   delete: boolean;
}

export interface SampleGroupParameter {
   objectId: string;
   parameter: Parameter;
   sampleGroup: Object;
   condition_type: string;
   validation: object;
   method: string;
   nabl: boolean;
   requirement: string;
   delete?: boolean;
}
