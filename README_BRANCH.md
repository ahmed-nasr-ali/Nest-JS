# MiddleWare Method

u can add middleware at @src\main.ts
app.use(middleware1);
app.use(middleware2);

middleware happen first then controller

we can retrun json at middleware
res.send({
'name':'isRequired'
})

we can make log of method and path
console.log('Making Request to ', req.method, ' ', req.originalUrl);

# MiddleWare Class

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class MiddleWare3 implements NestMiddleware {
use(req: any, res: any, next: (error?: any) => void) {
console.log('Reach Middle ware 3');
next();
}
}

- we use class pass to can make constructor and use oop functionality (dependecy injection - encapculation - ...)

- u can not put it inside @src\main.ts and make this
  app.use(middleware3); or app.use(new MiddleWare3())
  it will not work

# Dependency injection#

At app.module.ts
export class AppModule implements NestModule {
configure(consumer: MiddlewareConsumer) {
consumer
.apply(LoggerMiddleware)
.forRoutes('cats');
}
}

- MiddlewareConsumer => helper class provider many methods that can apply for middleware like (apply - forRoutes ...)

- apply can take list of middleware (methods - class )
  .apply(middleware1, MiddleWare3)

- we can make this middleware work with specific path and method
  .forRoutes({ path: 'cats', method: RequestMethod.GET });

- we can make this middleware work with all route
  .forRoutes('*');(wide card)

- we can make this middleware work with specific Controller
  .forRoutes(CatsController);

- we can make this middleware and put ex
  .exclude(
  { path: 'cats', method: RequestMethod.GET },
  { path: 'cats', method: RequestMethod.POST },
  )
  so this middleware will apply only with this exclude
