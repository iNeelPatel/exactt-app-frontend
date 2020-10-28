export interface TestGroupState {
   testGroups: TestGroup[] | undefined;
}

export interface TestGroup {
   name: string;
   createdAt: string;
   updatedAt: string;
   objectId: string;
   code: string;
   custom_field: string[];
   delete: boolean;
}
