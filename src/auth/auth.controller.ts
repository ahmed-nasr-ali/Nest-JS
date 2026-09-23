import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthPayloadDTO, authPayloadSchema } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { zodBody } from '../common/validation';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UsePipes(zodBody(authPayloadSchema))
  login(@Body() autPayload: AuthPayloadDTO) {
    return this.authService.validateUser(autPayload);
  }
}
