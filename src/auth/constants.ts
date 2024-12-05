import { SetMetadata } from "@nestjs/common"

export const jwtConstants = {
    secret: '85de576028e34cfbc54f1c7dfd51f913'
};
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);