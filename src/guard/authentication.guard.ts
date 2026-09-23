import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();

      const authHeader = request.header('authorization');
      console.log(authHeader);

      if (!authHeader) {
        throw new UnauthorizedException();
      }

      const token = authHeader.replace('Bearer ', '');
      request.user = this.jwtService.verify(token);
      console.log(request.user);
    } catch (e) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
