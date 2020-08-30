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
}

const Actions: ActionsTypes = {
   ALERT_SHOW: "SHOW",
   ALERT_HIDE: "HIDE",
   GET_ROLE_ACCESS: "GET_ROLE_ACCESS",
   UPDATE_ROLE: "UPDATE_ROLE",
   CREATE_ROLE: "CREATE_ROLE",
   GET_STATUS: "GET_STATUS",
   SET_ORGANIZATION: "SET_ORGANIZATION",
   GET_ORGANIZATION: "GET_ORGANIZATION",
   LOGIN: "LOGIN",
   SIGNUP: "SIGNUP",
   LOGOUT: "LOGOUT",
};

export default Actions;
