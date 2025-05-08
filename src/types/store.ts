import { ICompany, IProfile } from "./Type";

export interface IRegistorStore {
  current: number;
  nextStep: () => void;
  prevStep: () => void;
  changeStep: (current: number) => void;
}

export interface IProfileStore {
  profile: IProfile;
  company: ICompany | null;
  setProfile: (profile: IProfile) => void;
  clearProfile: () => void;
  setCompany: (company: ICompany) => void;
  clearCompany: () => void;
  getBranchoptions: () => void;
}