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
    // throw new Error('this is error');
    // throw new HttpException('this error', HttpStatus.BAD_REQUEST);
    // throw new HttpException(
    //   {
    //     error: true,
    //     serverTime: new Date(),
    //     message: 'there is an expected error',
    //   },
    //   HttpStatus.BAD_REQUEST,
    //   {
    //     cause: 'sd',
    //   },
    // );
    // throw new ForbiddenException({ error: true, message: 'ds' });
    throw new ForbiddenException('errrrrrrrrro');
    return this.customerService.getAllCustomer();
  }
}
