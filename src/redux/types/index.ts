import { HomeState } from "./HomeTypes";
import { UserState } from "./UserTypes";
import { AuthState } from "./AuthTypes";
import { OrganizationState } from "./OrganizationTypes";
import { RoleState } from "./RoleTypes";

export default interface AppState {
   home: HomeState;
   user: UserState;
   auth: AuthState;
   orgnization: OrganizationState;
   role: RoleState;
}
