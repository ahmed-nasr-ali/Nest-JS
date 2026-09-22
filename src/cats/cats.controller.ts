import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';

import { CustomerService } from '../customer/customer.service';
import { error } from 'console';
import { HttpExceptionFilter } from '../excpetion-filter/http-excpection.filter';

@Controller('cats')
// @UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomer() {
    return this.customerService.getAllCustomer();
  }
}
