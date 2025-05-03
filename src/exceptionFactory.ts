import { HttpException } from "@nestjs/common";
import { ValidationError } from "class-validator";

export const exceptionFactory = (errors: ValidationError[]) => {
  return new HttpException({
    success: false,
    result: {
      errors: errors.map((error) => ({
        property: error.property,
        constraints: error.constraints,
      }))
    },
  }, 400);
}