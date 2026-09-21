import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class MiddleWare3 implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    console.log('Reach Middle ware 3');
    next();
  }
}
