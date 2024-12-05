import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { v4 } from 'uuid';

@Injectable()
export class UserService {
    private readonly users: User[] = [];

    async findAccount(accountId: string): Promise<User | undefined> {
      return this.users.find(account => account.id === accountId);
    }
  
    async createUser(user: User): Promise<User> {
      let accountId = v4();
      user.id = accountId;
      this.users.push(user);
      return this.findAccount(accountId);
    }
}
