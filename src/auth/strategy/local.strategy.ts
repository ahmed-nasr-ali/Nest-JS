import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'name' });
  }

  validate(username: string, password: string): unknown {
    const user = this.authService.validateUser({ name: username, password });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
