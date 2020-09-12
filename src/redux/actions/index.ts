interface ActionsTypes {
   ALERT_SHOW: string;
   ALERT_HIDE: string;
   GET_ROLE_ACCESS: string;
   UPDATE_ROLE: string;
   CREATE_ROLE: string;
   GET_STATUS: string;
   SET_ORGANIZATION: string;
   GET_ORGANIZATION: string;
   LOGIN: string;
   SIGNUP: string;
   LOGOUT: string;
   GET_DEPARTMENTS: string;
   CREATE_DEPARTMENT: string;
   UPDATE_DEPARTMENT: string;
   CREATE_USER: string;
   GET_ACCESS_ROLES_LIST: string;
   GET_PROFILE: string;
   GET_USER: string;
   GET_USERS: string;
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

   //Department Actions
   GET_DEPARTMENTS: "GET_DEPARTMENTS",
   CREATE_DEPARTMENT: "CREATE_DEPARTMENT",
   UPDATE_DEPARTMENT: "UPDATE_DEPARTMENT",

   //Auth Actions
   GET_STATUS: "GET_STATUS",

   //Organization Actions
   SET_ORGANIZATION: "SET_ORGANIZATION",
   GET_ORGANIZATION: "GET_ORGANIZATION",
};

export default Actions;
