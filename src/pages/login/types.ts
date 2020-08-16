import { HomeState } from "../../redux/types/HomeTypes";
import { RouteProps } from "react-router-dom";

export interface Props extends HomeState, RouteProps {
   setHome: (data: string) => void;
}

export interface LoginForm {
   username: string;
   password: string;
}
