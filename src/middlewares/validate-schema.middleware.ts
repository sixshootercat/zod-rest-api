import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export const validateSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json(
          err.issues.map((issue) => ({
            message: issue.message,
          }))
        );
      }
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
