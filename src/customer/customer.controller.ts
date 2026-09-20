import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService, CustomerDTO } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customer: CustomerService) {}

  @Get()
  getAllCustomer() {
    return this.customer.getAllCustomer();
  }

  @Post()
  createCustomer(@Body('name') name: string, @Body('age') age: number): any {
    return this.customer.createCustomer(new CustomerDTO(name, age));
  }
}
