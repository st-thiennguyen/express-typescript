import { env } from './common/utils/envConfig';
import { app } from './server';

const server = app.listen(env.PORT, () => {
  const { NODE_ENV, PORT, HOST } = env;
  console.log(`Server ${NODE_ENV} running on port http://${HOST}:${PORT}`);
});

const onCloseSignal = () => {
  console.info('sigint received, shutting down');
  server.close(() => {
    console.info('Server is closed');
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref();
};

process.on('SIGINT', onCloseSignal);
process.on('SIGTERM', onCloseSignal);
