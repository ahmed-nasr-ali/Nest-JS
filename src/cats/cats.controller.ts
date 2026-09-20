import { Controller, Get } from '@nestjs/common';

import { CustomerService } from '../customer/customer.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomer() {
    return this.customerService.getAllCustomer();
  }
}
