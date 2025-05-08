import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProfileStore } from "../types/store";
import { IProfile } from "../types/Type";

const initailValue:IProfile = {
  id: 0,
  full_name: "",
  avatar: "",
  birth_date: "",
  email: "",
  salary_type: "",
  role: "employee",
};

const ProfileStore = create<IProfileStore>()(
  persist(
    (set, get) => ({
      profile: initailValue,
      company: null,
      setProfile: (profile) => set(() => ({ profile: profile })),
      clearProfile: () => set(() => ({ profile: initailValue })),
      setCompany: (company) => set(() => ({ company: company })),
      clearCompany: () => set(() => ({ company: null })),
      getBranchoptions: () => {
        return get().company?.branches?.map((item) => ({
          label: item?.name,
          value: item?.id,
        }));
      },
    }),
    {
      name: "profile-storage",
    }
  )
);

export default ProfileStore;
