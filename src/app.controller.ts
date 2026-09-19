import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Headers,
  HttpCode,
  Header,
} from '@nestjs/common';
// import { AppService } from './app.service';

@Controller('animals')
export class AppController {
  // POST /animals/cat
  // Body: { "name": "Simba", "age": 1 }
  // POST /animals/animals/cat
  // Body: { "name": "Jon", "age": 2 }

  @Post('cat')
  @HttpCode(201)
  // add response headers
  @Header('Language', 'EN')
  createCate(@Body('name') name: string, @Body('age') age: number): any {
    cats.push(new Cat(cats.length + 1, name, age));
    return cats;
  }

  // GET /animals/cat => will get all cats
  // GET /animals/cat?age=2 => will get specifc cat which its age is 2
  // case user type age not exist will return []
  @Get('cat-age')
  getCats(@Query('age') age?: number): any {
    if (age) {
      return cats.filter((cat) => cat.age === +age);
    }

    return cats;
  }

  @Get('cat/:id')
  getCatByIdAndShowHeader(
    @Param('id') id: string,
    @Headers('x-api-key') apikey: string,
  ) {
    let cat = cats.find((c) => c.id === +id);
    return { cat, apikey };
  }

  // GET /animals/cat/1
  // Header: x-api-key: abc123
  @Get('cat/:id')
  getCatById(@Param('id') id: string) {
    return cats.find((c) => c.id === +id);
  }
}

let cats: Cat[] = [];

class Cat {
  constructor(
    public id: number,
    public name: string,
    public age: number,
  ) {}
}
