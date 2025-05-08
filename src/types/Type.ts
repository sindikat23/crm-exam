export interface ILogin {
    phone_number: string;
    password: string;
}

export interface IRole {
    role: "director" | "manager" | "employee";
}
export interface IGender {
    gender: "male" | "famele";
  }
  

export interface IProfile extends IRole {
    id?: number;
    full_name: string;
    avatar?: string;
    gender?: IGender;
    birth_date?: string;
    email: string;
    salary_type: string;
}

export interface ICompany {
    id: number;
    name: string;
    owner: number;
    logo: string | null;
    stir: string;
    license_file: string;
    created_at: string;
    updated_at: string;
    branches: Array<IBranch>;
}
export interface IBranch {
    id: number;
    name: string;
    region: string;
    district: string;
    phone: string;
    additional_phone: string;
    address: string;
    latitude: string;
    longitude: string;
  }