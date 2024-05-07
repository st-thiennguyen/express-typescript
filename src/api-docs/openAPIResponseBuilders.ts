import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import { ServiceResponseSchema } from '../common/model/serviceResponse';

export const createAPIResponse = (
  schema: z.ZodTypeAny,
  description: string,
  StatusCode = StatusCodes.OK
) => {
  return {
    [StatusCode]: {
      description,
      content: {
        'application/json': {
          schema: ServiceResponseSchema(schema),
        },
      },
    },
  };
};
