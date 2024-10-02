import Joi, { ObjectSchema } from 'joi';

import { NextFunction, Response, Request } from 'express';
import { IUser } from '../models/User';
import { login } from '../services/UserService';
import { emitWarning } from 'process';

export function ValidateSchema(schema: ObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(422).json({ message: "Object validation failed, please include a valid object" });
    }
  }
}


export const Schemas = {
  user: {
    create: Joi.object<IUser>({
      type: Joi.string().valid('ADMIN', 'EMPLOYEE', 'PATRON').required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
      password: Joi.string().required(),
    }),
    login: Joi.object({
        email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
        password: Joi.string().required()
    })
  }
}
