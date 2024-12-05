import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [UserService],
  providers: [AccountService],
  exports: [AccountService]
})
export class AccountModule {}
