import { Injectable } from '@nestjs/common';
import { CustomerDTO } from './customer.validator';

@Injectable()
class CustomerService {
  customer: CustomerDTO[] = [];

  getAllCustomer() {
    return this.customer;
  }

  createCustomer(customer: CustomerDTO) {
    this.customer.push(customer);
    return customer;
  }
}

export { CustomerService };
