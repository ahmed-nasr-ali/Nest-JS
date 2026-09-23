import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDTO } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
const fakeUsers = [
  {
    id: 1,
    name: 'ahmed',
    password: '123',
  },
  {
    id: 2,
    name: 'Ali',
    password: '456',
  },
];
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ name, password }: AuthPayloadDTO) {
    const findUser = fakeUsers.find((user) => user.name === name);

    if (!findUser || password !== findUser.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.jwtService.sign({ id: findUser?.id, name: findUser?.name });
  }
}
