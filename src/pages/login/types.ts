import { UserState } from "../../redux/types/UserTypes";
import { RouteComponentProps } from "react-router-dom";

export interface Props extends UserState, RouteComponentProps {
   login: (username: string, password: string) => any;
}

export interface LoginForm {
   username: string;
   password: string;
}
