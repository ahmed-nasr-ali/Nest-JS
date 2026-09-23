import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CatsModule } from './cats/cats.module';
import { ProductModule } from './product/product.module';
import { GlobalModule } from './global/global.module';
import { MiddleWare3 } from './middleware/middleware3';
import middleware1 from './middleware/middleware1';
import { CatsController } from './cats/cats.controller';
import { CustomerController } from './customer/customer.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CustomerModule,
    CatsModule,
    ProductModule,
    GlobalModule,
    AuthModule,
  ],
  controllers: [],
  providers: [Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(middleware1, MiddleWare3)
    //   // .forRoutes('cats')
    //   // .forRoutes({ path: 'cats', method: RequestMethod.GET });
    //   // .forRoutes('*');
    //   .forRoutes(CatsController);
  }
}
