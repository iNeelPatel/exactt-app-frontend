import { HomeState } from "../../redux/types/HomeTypes";

export interface Props extends HomeState {
    setHome: (data: string) => void;
}
