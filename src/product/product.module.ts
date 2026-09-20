import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductServce } from './product.service';
import { CatsModule } from '../cats/cats.module';

@Module({
  controllers: [ProductController],
  providers: [ProductServce],
})
export class ProductModule {}
