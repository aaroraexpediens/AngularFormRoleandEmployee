import { Role } from "./Role";

export interface Employee {
  id: number ;
  employeename: string | null;
  employeeEmail: string | null;
  employeePassword: string | null;

    
  roles: Role[];
  }