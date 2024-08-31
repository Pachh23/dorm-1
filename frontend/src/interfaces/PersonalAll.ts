import { AddressInterface } from "./Address";
import { FamilyInterface } from "./Family";
import { OtherInformationInteface } from "./OtherInformation";
import { PersonalInformationInterface } from "./PersonalInformation";
import { StudentInterface } from "./IUser";

export interface PersonalAllInterface{
  personalInfo: PersonalInformationInterface
  address: AddressInterface
  family: FamilyInterface
  otherInfo: OtherInformationInteface
  student: StudentInterface
}