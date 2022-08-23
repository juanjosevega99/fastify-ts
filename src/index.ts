import Fastify, { FastifyInstance } from 'fastify';
import os from 'os';

const server: FastifyInstance = Fastify({ logger: true });

server.get('/ping', async (_, res) => {
  res.send('pong')
  return { pong: 'it worked!', instance: os };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });

    const address = server.server.address();
    const port = typeof address === 'string' ? address : address?.port;

    server.log.info(`Server listening at ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

// server.listen({ port: 8080 }, (err, address) => {
//   if (err) {
//     console.error(err)
//     process.exit(0)
//   }
//   console.log(`Server listening at ${address}`)
// })
