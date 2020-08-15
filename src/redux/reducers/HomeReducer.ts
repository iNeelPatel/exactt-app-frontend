import { HomeState, HomeAction, HomeActionType } from "../types/HomeTypes";

const initialState: HomeState = {
    home: "Home",
    user: { name: "neel" },
};

export default (
    state: HomeState = initialState,
    action: HomeAction
): HomeState => {
    switch (action.type) {
        case HomeActionType.HOME:
            return {
                ...state,
                home: action.payload,
            };
        default:
            return state;
    }
};
