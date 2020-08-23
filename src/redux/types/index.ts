import { HomeState } from "./HomeTypes";
import { UserState } from "./UserTypes";
import { AuthState } from "./AuthTypes";
import { OrganizationState } from "./OrganizationTypes";

export default interface AppState {
   home: HomeState;
   user: UserState;
   auth: AuthState;
   orgnization: OrganizationState;
}
