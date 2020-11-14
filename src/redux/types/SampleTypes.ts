import { User } from "parse";
import { Departments } from "./DepartmentTypes";
import { Parameter } from "./ParameterTypes";

export interface SampleState {
   samples: Sample[] | [];
   sample: Sample | {};
   searchedSample: Sample[] | [];
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
   };
   generic_name: string;
   test_group: string;
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
   test_method_group: Object;
   results: SampleResults;
   sampleResults: SampleResults;
   sampleResultParameters: SampleResultParameters[];
   instruction: string;
   hod: User;
   parameters: any[];
   results_id?: string;
   status: number;
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
   validation: Object;
   method: string;
   requirement: string;
   nabl: boolean;
   nagative: boolean;
   department: Departments;
   sample: Object;
   status: number;
}

export interface SampleResults {
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
