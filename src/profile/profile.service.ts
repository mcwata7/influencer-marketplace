import { Injectable } from '@nestjs/common';
import { Profile } from './interfaces/profile.interface';

@Injectable()
export class ProfileService {
    private readonly profiles: Profile[] = []
}
