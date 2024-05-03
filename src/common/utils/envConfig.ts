import dotenv from 'dotenv';
import { cleanEnv, host, port, str, testOnly } from 'envalid';
dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    devDefault: testOnly('test'),
    choices: ['development', 'production', 'test'],
  }),
  CORS_ORIGIN: str({
    devDefault: testOnly('http://localhost:8080'),
  }),
  PORT: port({ devDefault: testOnly(8080) }),
  HOST: host({ devDefault: testOnly('localhost') }),
});
