import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { loginSchema } from '../schemas/login';

export const login = (_req: Request, res: Response) => {
  res.send('logged in');
};
