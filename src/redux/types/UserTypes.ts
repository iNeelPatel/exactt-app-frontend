export interface UserState {
   user: any;
   userData?: any;
   users?: any;
   createUser?: any;
   delete?: any;
}

export interface User {
   objectId: string;
   name: string;
   email: string;
   username: string;
   phone: string;
   role: any;
   department: Object;
   delete: boolean;
   get: (fieldName: string) => string;
   toJSON: () => any;
}
