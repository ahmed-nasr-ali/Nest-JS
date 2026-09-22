# Pipe

## u can create pipe

- write this command
  nest g pipe MyFirstPipePip

# use above route

@Post()
@UsePipes(MyFirstPipePipe)
createCustomer(@Body('name') name: string, @Body('age') age: number): any {
return this.customer.createCustomer(new CustomerDTO(name, age));
}

# u can add it in attribute

@Get()
getAllCustomer(@Query('limit', MyFirstPipePipe) limit: string) {
console.log('the type of limit is ', typeof limit);
console.log(limit);
return this.customer.getAllCustomer();
}

- will change limit to number becuase MyFirstPipePipe was chnage value to number

# u can use Build in pipe

@Get()
getAllCustomer(@Query('limit', ParseIntPipe) limit: string) {
console.log('the type of limit is ', typeof limit);
console.log(limit);
return this.customer.getAllCustomer();
}

## u can override error

- make new instance of this build in pipe
  @Get()
  getAllCustomer(
  @Query('limit', new ParseIntPipe({ errorHttpStatusCode: 422 }))
  limit: string,
  ) {
  console.log('the type of limit is ', typeof limit);
  console.log(limit);
  return this.customer.getAllCustomer();
  }

# custom vaildation

- run this in command npm i --save class-validator class-transformer
- add global pipe at main app.useGlobalPipes(new ValidationPipe());
- we can add paramter to ValidationPipe
  - disableErrorMessages: true
  - whitelist: true, forbidNonWhitelisted: true =>can not enter extra data

## second type most use is Zod

- run this command npm install --save zod

### Create zod sechem

import {
PipeTransform,
ArgumentMetadata,
BadRequestException,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
constructor(private schema: ZodSchema) {}

transform(value: unknown, metadata: ArgumentMetadata) {
try {
const parsedValue = this.schema.parse(value);
return parsedValue;
} catch (error) {
throw new BadRequestException('Validation failed');
}
}
}

- this take value at this.schema.parse(value) => body
  - case make parse without any error return it
  - case any error throw it

- to use it at route above controller
  @UsePipes(new ZodValidationPipe(createCustomerSchema))
  createCustomer(@Body() body: CustomerDTO): any {}
- u can also use this at parms or query

#### Query

const limitSchema = z.object({
limit: z.string().regex(/^\d+$/).transform(Number),
});

@Get()
getAllCustomer(
@Query(new ZodValidationPipe(limitSchema)) query: { limit: number },
) {
return this.customer.getAllCustomer();
}

#### Param

const idParamSchema = z.object({
id: z.string().regex(/^\d+$/).transform(Number),
});

@Get(':id')
getOneCustomer(
@Param(new ZodValidationPipe(idParamSchema)) params: { id: number },
) {
...
}
