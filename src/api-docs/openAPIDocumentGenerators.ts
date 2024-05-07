import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from '@asteasolutions/zod-to-openapi';
import { categoryRegistry } from '../api/category/categoryRouter';

export const generatorDocumentAPI = () => {
  const registry = new OpenAPIRegistry([categoryRegistry]);
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'API Docs - Application name',
    },
    externalDocs: {
      description: 'View api docs',
      url: '/swagger.json',
    },
  });
};
