import { Injectable } from '@nestjs/common';

class CustomerDTO {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

@Injectable()
class CustomerService {
  customer: CustomerDTO[] = [];

  getAllCustomer() {
    return this.customer;
  }

  createCustomer(customer: CustomerDTO) {
    this.customer.push(customer);
  }
}

export { CustomerService, CustomerDTO };
