import { HomeState } from "./HomeTypes";
import { UserState } from "./UserTypes";
import { AuthState } from "./AuthTypes";

export default interface AppState {
   home: HomeState;
   user: UserState;
   auth: AuthState;
}
