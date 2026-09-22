import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  Query,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { zodBody } from '../common/validation';
import { createCustomerSchema } from './customer.validator';
import type { CustomerDTO } from './customer.validator';

// import { MyFirstPipePipe } from '../my-first-pipe/my-first-pipe.pipe';

@Controller('customer')
export class CustomerController {
  constructor(private customer: CustomerService) {}

  @Get()
  getAllCustomer(
    @Query(
      'limit',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    limit: string,
  ) {
    console.log('the type of limit is ', typeof limit);
    console.log(limit);
    return this.customer.getAllCustomer();
  }

  // @Post()
  // @UsePipes(MyFirstPipePipe)
  // createCustomer(@Body('name') name: string, @Body('age') age: number): any {
  //   return this.customer.createCustomer(new CustomerDTO(name, age));
  // }

  @Post()
  @UsePipes(zodBody(createCustomerSchema))
  createCustomer(@Body() body: CustomerDTO): any {
    console.log('in the create customer ');
    return this.customer.createCustomer(body);
  }
}
