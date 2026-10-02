import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import middleware1 from './middleware/middleware1';
import middleware2 from './middleware/middleware2';
// import { HttpExceptionFilter } from './excpetion-filter/http-excpection.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './excpetion-filter/http-excpection.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(middleware1);
  // app.use(middleware2);
  // app.useGlobalFilters(new HttpExceptionFilter());
  const loggerInstance = app.get(Logger);
  const config = app.get(ConfigService);
  app.useGlobalFilters(new HttpExceptionFilter(loggerInstance));
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     disableErrorMessages: true,
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // );
  await app.listen(config.get('port') ?? 3000);
}
bootstrap();
