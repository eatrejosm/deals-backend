import { Request, Response, NextFunction } from 'express';
import HttpError from '../utils/HttpError';

const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
};

export default errorHandler;
