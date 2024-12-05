export enum ProfileType {
    influencer,
    sponsor
}

export interface Profile {
    id: string;
    userId: string;
    name: string;
    profileType: ProfileType;
}