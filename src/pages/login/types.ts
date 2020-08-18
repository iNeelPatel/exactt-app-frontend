import { UserState } from "../../redux/types/UserTypes";
import { RouteProps } from "react-router-dom";

export interface Props extends UserState, RouteProps {
   login: (username: string, password: string) => any;
}

export interface LoginForm {
   username: string;
   password: string;
}
