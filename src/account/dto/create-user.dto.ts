import { User } from "src/user/interfaces/user.interface";

export class CreateAccountDto {
    id: string;
    readonly name: string;
    readonly users: User[]
}