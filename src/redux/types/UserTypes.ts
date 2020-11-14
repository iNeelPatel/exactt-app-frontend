export interface UserState {
   user: any;
   userData?: any;
   users?: any;
   createUser?: any;
}

export interface User {
   objectId: string;
   name: string;
   email: string;
   username: string;
   phone: string;
   role: Object;
   department: Object;
   delete: boolean;
}
