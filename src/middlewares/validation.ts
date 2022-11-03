import type { NextFunction, Request, Response } from "express";
import type { ObjectSchema } from "yup";

type Schema = {
  body?: any
  query?: any
  params?: any
}

type ValidationMiddleware = (schema: ObjectSchema<Schema>) => (req: Request, res: Response, next: NextFunction) => void

export const validate: ValidationMiddleware = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
};
