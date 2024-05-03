import dotenv from 'dotenv';
import { cleanEnv, str, testOnly } from 'envalid';
dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    devDefault: testOnly('test'),
    choices: ['development', 'production', 'test'],
  }),
  CORS_ORIGIN: str({
    devDefault: testOnly('http://localhost:3000'),
  }),
});
