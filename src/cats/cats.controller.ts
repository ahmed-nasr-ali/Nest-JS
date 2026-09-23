import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
  UseGuards,
} from '@nestjs/common';

import { CustomerService } from '../customer/customer.service';
import { error } from 'console';
import { HttpExceptionFilter } from '../excpetion-filter/http-excpection.filter';
import { AuthenticationGuard } from '../guard/authentication.guard';

@Controller('cats')
// @UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(AuthenticationGuard)
  @Get()
  getAllCustomer() {
    return this.customerService.getAllCustomer();
  }
}
