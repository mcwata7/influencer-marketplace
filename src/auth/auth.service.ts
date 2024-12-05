
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: AccountService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string, 
    pass: string
): Promise<{ access_token: string }> {
    const account = await this.usersService.findAccount(username);
    if (account?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: account.userId, username: account.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async verify(access_token: string): Promise<any> {
    if (!access_token) {
      throw new UnauthorizedException();
    }
    try {
      return await this.jwtService.verifyAsync(
        access_token,
        {
          secret: jwtConstants.secret
        }
      );
    } catch {
      throw new UnauthorizedException();
    }
  }
}
