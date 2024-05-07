import express, { Request, Response, Router } from 'express';
import { generatorDocumentAPI } from './openAPIDocumentGenerators';
import swaggerUi from 'swagger-ui-express';

export const openAPIRouter = (): Router => {
  const router = express.Router();
  const openAPIDocument = generatorDocumentAPI();
  router.get('/swagger.json', (_request: Request, response: Response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send(openAPIDocument);
  });
  router.use('/', swaggerUi.serve, swaggerUi.setup(openAPIDocument));
  return router;
};
