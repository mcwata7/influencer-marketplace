
import { Injectable } from '@nestjs/common';
import { Account } from './interfaces/account.interface'
import { v4 } from 'uuid';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/interfaces/user.interface';

@Injectable()
export class AccountService {
  constructor(private userService: UserService) {};

  private readonly accounts: Account[] = [];

  async findAccount(accountId: string): Promise<Account | undefined> {
    return this.accounts.find(account => account.id === accountId);
  }

  async createAccount(account: Account): Promise<Account> {
    let accountId = v4();
    account.id = accountId;
    this.accounts.push(account);
    return this.findAccount(accountId);
  }

  async assignUserById(userId: string, accountId: string): Promise<Account> {
    return this.assignUser(await this.userService.findAccount(userId), await this.findAccount(accountId));
  }

  async assignUser(user: User, account: Account): Promise<Account> {
    account.user.push(user);
    return account;
  }
}
