import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CustomerModule } from '../customer/customer.module';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
