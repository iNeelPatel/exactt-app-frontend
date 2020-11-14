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
import { SampleDetailsState } from "./SampleDetailsTypes";
import { SampleState } from "./SampleTypes";

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
   samplesDetails: SampleDetailsState;
   samples: SampleState;
}
