import { UserState } from "./UserTypes";
import { AuthState } from "./AuthTypes";
import { OrganizationState } from "./OrganizationTypes";
import { RoleState } from "./RoleTypes";
import { AlertBoxState } from "./AlertBoxTypes";
import { DepartmentState } from "./DepartmentTypes";
import { CustomerState } from "./CustomerTypes";
import { TestGroupState } from "./TestGroupsTypes";
import { ParameterState } from "./ParameterTypes";
import { SampleGroupState } from "./SampleGroupTypes";

export default interface AppState {
   user: UserState;
   auth: AuthState;
   orgnization: OrganizationState;
   role: RoleState;
   alertBox: AlertBoxState;
   department: DepartmentState;
   customer: CustomerState;
   testGroup: TestGroupState;
   parameter: ParameterState;
   sampleGroup: SampleGroupState;
}
