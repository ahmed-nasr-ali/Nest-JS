import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  console.log('Making Request to ', req.method, ' ', req.originalUrl);
  next();
};
