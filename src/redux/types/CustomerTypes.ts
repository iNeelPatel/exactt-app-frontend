export interface Customer {
   objectId?: string;
   name: string;
   contact: {
      name?: string;
      email?: string;
      phone?: string;
   };
   address: {
      line1: string;
      line2: string;
      city: string;
      zip: string;
      state: string;
   };
   email: string;
   bank: {
      name: string;
      acc_name: string;
      acc_number: string;
      branch: string;
      ifsc: string;
   };
   gst: string;
}

export interface CustomerState {
   customers: Customer[] | [];
   customer: Customer | {};
   searchedCustomers: Customer[] | [];
}
