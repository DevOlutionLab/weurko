import { Partner } from "./Partner";

export interface User {
    id?: string;
    partner?: Partner
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    phone: string;
    address: string;
    confirmPassword:string;
}
