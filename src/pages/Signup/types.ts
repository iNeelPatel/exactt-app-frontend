import { UserState } from "../../redux/types/UserTypes";
import { RouteComponentProps } from "react-router-dom";

export interface Props extends UserState, RouteComponentProps {
   signup: (data: { username: string; name: string; phone: string; email: string; password: string; confirmPassword: string }) => void;
}

export interface SignupForm {
   username: string;
   name: string;
   phone: string;
   email: string;
   password: string;
   confirmPassword: string;
}
