import { UserState } from "./UserTypes";
import { AuthState } from "./AuthTypes";
import { OrganizationState } from "./OrganizationTypes";
import { RoleState } from "./RoleTypes";
import { AlertBoxState } from "./AlertBoxTypes";

export default interface AppState {
   user: UserState;
   auth: AuthState;
   orgnization: OrganizationState;
   role: RoleState;
   alertBox: AlertBoxState;
}
