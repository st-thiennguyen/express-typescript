import cors from 'cors';
import express, { type Express } from 'express';
import { env } from './common/utils/envConfig';
import helmet from 'helmet';
import { openAPIRouter } from './api-docs/openAPIRouter';
import { healthCheckRouter } from './api/healthCheck/healthCheckRouter';
import { categoryRouter } from './api/category/categoryRouter';
const app: Express = express();

// set the application to trust the reverse proxy
app.set('trust proxy', true);

// Middleware
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
// rate limit will update later

// app routes
app.use('/health-check', healthCheckRouter());
app.use('/categories', categoryRouter());

// set up swagger ui
app.use(openAPIRouter());

export { app };
