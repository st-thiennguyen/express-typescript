import express, { Request, Response, Router } from 'express';
import { categoryService } from './categoryService';
import { handleServiceResponse } from '../../common/utils/httpHandler';
import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { createAPIResponse } from '../../api-docs/openAPIResponseBuilders';
import { z } from 'zod';
import { CategorySchema } from './categoryModel';

export const categoryRegistry = new OpenAPIRegistry();

export const categoryRouter = (): Router => {
  const router = express.Router();

  categoryRegistry.registerPath({
    method: 'get',
    path: '/categories',
    tags: ['Category'],
    responses: createAPIResponse(z.array(CategorySchema), 'Success'),
  });

  categoryRegistry.registerPath({
    method: 'post',
    path: '/categories',
    tags: ['Category'],
    request: { body: { content: {} } },
    responses: createAPIResponse(CategorySchema, 'Success'),
  });

  router.get('/', async (_request: Request, response: Response) => {
    const categoryResponse = await categoryService.findAll();
    handleServiceResponse(categoryResponse, response);
  });

  router.post('/', async (request: Request, response: Response) => {
    const { name } = request.body;
    const categoryResponse = await categoryService.create(name);
    handleServiceResponse(categoryResponse, response);
  });
  return router;
};
