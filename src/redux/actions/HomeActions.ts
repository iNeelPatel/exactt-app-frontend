import { HomeAction, HomeActionType } from "../types/HomeTypes";

export function setHome(data: string): HomeAction {
    return {
        type: HomeActionType.HOME,
        payload: data,
    };
}
