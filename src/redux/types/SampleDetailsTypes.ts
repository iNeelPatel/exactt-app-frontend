export interface SampleDetailsState {
   samplesDetails: SampleDetails[] | [];
   sampleDetails: SampleDetails | undefined;
}

export interface SampleDetails {
   createdAt: string;
   updatedAt: string;
   objectId: string;
   name: string;
   genericName: string;
   sampleGroups: any;
   delete: boolean;
}
