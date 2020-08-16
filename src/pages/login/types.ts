import { HomeState } from "../../redux/types/HomeTypes";
import {RouteProps} from 'react-router-dom'

export interface Props extends HomeState, RouteProps {
   setHome: (data: string) => void;
}
