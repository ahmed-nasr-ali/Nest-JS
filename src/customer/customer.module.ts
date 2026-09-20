import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService], /// to use inside other module and inside another module import CustomerModule
  /// notes not import in another module CustomerService no u import module itself
  /// another module will comes to this module and take a look at exports and will import them at its module
})
export class CustomerModule {}
