import { Controller, Get } from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';

@Controller('product')
export class ProductController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAllCustomer() {
    return this.customerService.getAllCustomer();
  }
}
