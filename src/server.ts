import cors from 'cors';
import express, { type Express } from 'express';
import { env } from './common/utils/envConfig';
import helmet from 'helmet';
const app: Express = express();

// set the application to trust the reverse proxy
app.set('trust proxy', true);

// Middleware
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
// rate limit will update later

export { app };
