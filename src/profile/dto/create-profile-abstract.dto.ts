import { ProfileType } from "../interfaces/profile.interface";

export abstract class CreateProfile {
    id: string;
    readonly userId: string;
    readonly name: string;
    readonly profileType: ProfileType;
}