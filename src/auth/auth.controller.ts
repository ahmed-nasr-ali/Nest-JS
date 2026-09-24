import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthPayloadDTO, authPayloadSchema } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { zodBody } from '../common/validation';
import { LocalGuard } from './guard/local.guard';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UsePipes(zodBody(authPayloadSchema))
  @UseGuards(LocalGuard)
  login(@Body() autPayload: AuthPayloadDTO) {
    const user = this.authService.validateUser(autPayload);
    return user;
  }

  @Get('status')
  status(@Req() req: Request) {
    req.user;
  }
}
