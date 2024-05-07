import express, { Request, Response } from 'express';
import {
  ResponseStatus,
  ServiceResponse,
} from '../../common/model/serviceResponse';
import { StatusCodes } from 'http-status-codes';
import { handleServiceResponse } from '../../common/utils/httpHandler';

export const healthCheckRouter = () => {
  const router = express.Router();
  router.get('/', (_request: Request, response: Response) => {
    const serviceResponse = new ServiceResponse(
      ResponseStatus.Success,
      'Service healthy',
      null,
      StatusCodes.OK
    );
    handleServiceResponse(serviceResponse, response);
  });
  return router;
};
