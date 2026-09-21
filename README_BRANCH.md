# Error Handler

## throw new Error

new Error('this is error ');
it will return {
"statusCode": 500,
"message": "Internal server error"
}

## u can use HttpException

throw new HttpException('this error', HttpStatus.BAD_REQUEST);
will return {
"statusCode": 400, => becuase of HttpStatus.BAD_REQUEST
"message": "this error" => message that u type
}

## u can add object to HttpException

throw new HttpException(
{
error: true,
serverTime: new Date(),
message: 'there is an expected error',
},
HttpStatus.BAD_REQUEST,
);

## u can put cause to show error to backend side

try {
await this.service.findAll()
} catch (error) {
throw new HttpException({
status: HttpStatus.FORBIDDEN,
error: 'This is a custom message',
}, HttpStatus.FORBIDDEN, {
cause: error
});
}

## u can use cutome excpetion

- with empty constructor
  new ForbiddenException();
  will return {
  "message": "Forbidden",
  "statusCode": 403
  }

- with text at contuctor
  new ForbiddenException('this an error ');
  {
  "message": "this an error ",
  "error": "Forbidden",
  "statusCode": 403
  }

- with object at constructor
  new ForbiddenException({ error: true, message: 'ds' });
  {
  "error": true,
  "message": "ds"
  }

### note u can use any othe custom class like

## u can make custom excpetion filter

- get the code from doc https://docs.nestjs.com/exception-filters at part of Exception filters#

### u can use it above every route

@Get()
@UseFilters(HttpExceptionFilter)
getAllCustomer() { throw new ForbiddenException('errrrrrrrrro');
return this.customerService.getAllCustomer();
}

### u can use it above controller

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
...
}

#### u can make it global

- at main.ts
  app.useGlobalFilters(new HttpExceptionFilter());
