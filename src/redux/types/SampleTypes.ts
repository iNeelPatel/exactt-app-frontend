import { Departments } from "./DepartmentTypes";
import { Parameter } from "./ParameterTypes";
import { SampleGroup } from "./SampleGroupTypes";
import { TestGroup } from "./TestGroupsTypes";
import { User } from "./UserTypes";

export interface SampleState {
   samples: Sample[] | [];
   searchedSample: Sample[] | [];
   sample: Sample | undefined;
   sampleAssign: SampleResultParameters[] | [];
   sampleResult: any;
}

export interface Sample {
   objectId: string;
   sampleId: string;
   name: string;
   customer: {
      objectId: string;
      phone: string;
      name: string;
      email: string;
      contact: any;
      address: {
         line1: string;
         line2: string;
         city: string;
         zip: string;
         state: string;
      };
   };
   generic_name: string;
   test_group: TestGroup;
   date: Date;
   due_date: Date;
   lab_due_date: Date;
   collection_date: Date;
   mfg_date: Date;
   exp_date: Date;
   sample_code: string;
   brand_name: string;
   manufacture: string;
   marking: string;
   supplier: string;
   batch_no: string;
   batch_size: string;
   drug_lic_no: string;
   type: string;
   description: string;
   sample_packing: string;
   sample_qty: string;
   sample_condition: string;
   serving_size: string;
   env_condition: string;
   collection_by: User;
   sampling_method: string;
   test_method_group: SampleGroup;
   results: SampleResults;
   sampleResults: SampleResults;
   sampleResultParameters: SampleResultParameters[];
   instruction: string;
   hod: User;
   parameters: any[];
   results_id?: string;
   status: number;
   jobAllotmentUrl: string;
   jobSheetUrl: string;
   testRequestUrl: string;
}

export interface SampleResultParameters {
   objectId: string;
   parameter: Parameter;
   name: string;
   assign_to: User;
   hod: User;
   due_date: Date;
   assign_date: Date;
   result: string;
   unit: string;
   condition_type: string;
   validation: { min: number; max: number } | any;
   method: string;
   requirement: string;
   nabl: boolean;
   nagative: boolean;
   department: Departments;
   sample: Object;
   status: number;
}

export interface SampleResults {
   id: string;
   sample: Object;
   analysisDate: Date;
   completeDate: Date;
   reportDate: Date;
   url: string;
   remarks: string;
   authorizedSignature: User;
   files: object;
   sampleResultParameters: SampleResultParameters[];
}
