interface ActionsTypes {
   ALERT_SHOW: string;
   ALERT_HIDE: string;
   GET_ROLE_ACCESS: string;
   //ROLE
   UPDATE_ROLE: string;
   CREATE_ROLE: string;
   GET_STATUS: string;
   //ORGANIZATION
   SET_ORGANIZATION: string;
   GET_ORGANIZATION: string;
   LOGIN: string;
   SIGNUP: string;
   LOGOUT: string;
   //DEPARTMENT
   GET_DEPARTMENTS: string;
   CREATE_DEPARTMENT: string;
   UPDATE_DEPARTMENT: string;
   //USER
   CREATE_USER: string;
   GET_ACCESS_ROLES_LIST: string;
   GET_PROFILE: string;
   GET_USER: string;
   GET_USERS: string;
   UPDATE_USER: string;
   DELETE_USERS: string;
   //CUSTOMER
   GET_CUSTOMERS: string;
   GET_CUSTOMER: string;
   CREATE_CUSTOMER: string;
   UPDATE_CUSTOMER: string;
   DELETE_CUSTOMER: string;
   SET_DETAILS_CUSTOMER: string;
   GET_TEST_GROUPS: string;
   CREATE_TEST_GROUPS: string;
   GET_TEST_GROUP: string;
   UPDATE_TEST_GROUP: string;
   GET_PARAMETERS: string;
   CREATE_PARAMETER: string;
   GET_PARAMETER: string;
   UPDATE_PARAMETER: string;
   GET_SAMPLE_GROUPS: string;
   SEARCH_PARAMETERS: string;
   CREATE_SAMPLE_GROUP: string;
   GET_SAMPLE_GROUP: string;
   UPDATE_SAMPLE_GROUP: string;
   GET_SAMPLES_DETAILS: string;
   CREATE_SAMPLE_DETAILS: string;
   GET_SAMPLE_DETAILS: string;
   UPDATE_SAMPLE_DETAILS: string;
   SEARCH_SAMPLE_GROUP: string;
   SEARCH_CUSTOMERS: string;
   SEARCH_SAMPLE_DETAILS: string;
   SEARCH_TEST_GROUP: string;
   GET_SAMPLES: string;
   CREATE_SAMPLE: string;
   GET_SAMPLE: string;
   UPDATE_SAMPLE: string;
   SEARCH_SAMPLE: string;
   SAMPLE_ASSIGN: string;
}

const Actions: ActionsTypes = {
   //Alert Box Actions
   ALERT_SHOW: "SHOW",
   ALERT_HIDE: "HIDE",

   //Roles Actions
   GET_ROLE_ACCESS: "GET_ROLE_ACCESS",
   UPDATE_ROLE: "UPDATE_ROLE",
   CREATE_ROLE: "CREATE_ROLE",
   GET_ACCESS_ROLES_LIST: "GET_ACCESS_ROLES_LIST",

   //User Actions
   LOGIN: "LOGIN",
   SIGNUP: "SIGNUP",
   LOGOUT: "LOGOUT",
   CREATE_USER: "CREATE_USER",
   GET_PROFILE: "GET_PROFILE",
   GET_USER: "GET_USER",
   GET_USERS: "GET_USERS",
   UPDATE_USER: "UPDATE_USER",
   DELETE_USERS: "DELETE_USERS",

   //Department Actions
   GET_DEPARTMENTS: "GET_DEPARTMENTS",
   CREATE_DEPARTMENT: "CREATE_DEPARTMENT",
   UPDATE_DEPARTMENT: "UPDATE_DEPARTMENT",

   //Auth Actions
   GET_STATUS: "GET_STATUS",

   //Organization Actions
   SET_ORGANIZATION: "SET_ORGANIZATION",
   GET_ORGANIZATION: "GET_ORGANIZATION",

   //Customer Actions
   GET_CUSTOMERS: "GET_CUSTOMERS",
   GET_CUSTOMER: "GET_CUSTOMER",
   CREATE_CUSTOMER: "CREATE_CUSTOMER",
   UPDATE_CUSTOMER: "UPDATE_CUSTOMER",
   DELETE_CUSTOMER: "DELETE_CUSTOMER",
   SEARCH_CUSTOMERS: "SEARCH_CUSTOMERS",
   SET_DETAILS_CUSTOMER: "SET_DETAILS_CUSTOMER",

   //Test Groups Actions
   GET_TEST_GROUPS: "GET_TEST_GROUPS",
   CREATE_TEST_GROUPS: "CREATE_TEST_GROUPS",
   GET_TEST_GROUP: "GET_TEST_GROUP",
   UPDATE_TEST_GROUP: "UPDATE_TEST_GROUP",
   SEARCH_TEST_GROUP: "SEARCH_TEST_GROUP",

   //Parameter Actions
   GET_PARAMETERS: "GET_PARAMETERS",
   GET_PARAMETER: "GET_PARAMETER",
   CREATE_PARAMETER: "CREATE_PARAMETER",
   UPDATE_PARAMETER: "UPDATE_PARAMETER",
   SEARCH_PARAMETERS: "SEARCH_PARAMETERS",

   //Sample Group Actions
   GET_SAMPLE_GROUPS: "GET_SAMPLE_GROUPS",
   CREATE_SAMPLE_GROUP: "CREATE_SAMPLE_GROUP",
   GET_SAMPLE_GROUP: "GET_SAMPLE_GROUP",
   UPDATE_SAMPLE_GROUP: "UPDATE_SAMPLE_GROUP",
   SEARCH_SAMPLE_GROUP: "SEARCH_SAMPLE_GROUP",

   //Sample Deatils Actions
   GET_SAMPLES_DETAILS: "GET_SAMPLES_DETAILS",
   CREATE_SAMPLE_DETAILS: "CREATE_SAMPLE_DETAILS",
   GET_SAMPLE_DETAILS: "GET_SAMPLE_DETAILS",
   UPDATE_SAMPLE_DETAILS: "UPDATE_SAMPLE_DETAILS",
   SEARCH_SAMPLE_DETAILS: "SEARCH_SAMPLE_DETAILS",

   //Sample  Actions
   GET_SAMPLES: "GET_SAMPLES",
   CREATE_SAMPLE: "CREATE_SAMPLE",
   GET_SAMPLE: "GET_SAMPLE",
   UPDATE_SAMPLE: "UPDATE_SAMPLE",
   SEARCH_SAMPLE: "SEARCH_SAMPLE",
   SAMPLE_ASSIGN: "SAMPLE_ASSIGN",
};

export default Actions;
