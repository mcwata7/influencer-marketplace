import { User } from "src/user/interfaces/user.interface";

export interface Account {
    id: string;
    name: string;
    user: User[];
}