import { UserState } from "../../redux/types/UserTypes";
import { RouteProps } from "react-router-dom";

export interface Props extends UserState, RouteProps {
   login: (username: string, password: string) => void;
}

export interface LoginForm {
   username: string;
   password: string;
}
