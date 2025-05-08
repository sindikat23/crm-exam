import React from "react";
import { IRole } from "../../types/Type";

const CheckRole: React.FC<IRole> = ({ role = "employee" }) => {
  if (role == "director") return "Rahbar";
  if (role == "manager") return "Ish boshqaruvchi";
  if (role == "employee") return "Xodim";
};

export default CheckRole;