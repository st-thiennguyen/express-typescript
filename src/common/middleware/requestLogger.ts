import { Options } from 'pino-http';
import { env } from '../utils/envConfig';
import { Request, Response } from 'express';

type PinoCustomProps = {
  request: Request;
  response: Response;
  error: Error;
  body: unknown | any | object;
};

const requestLogger = () => {
  const pinoOptions: Options = {
    enabled: env.isProduction,
    customProps: customProps as Options['customProps'],
    redact: [],
  };
};

const customProps = (req: Request, res: Response): PinoCustomProps => ({
  request: req,
  response: res,
  error: res.locals.err,
  body: res.locals.responseBody,
});

export default requestLogger();
