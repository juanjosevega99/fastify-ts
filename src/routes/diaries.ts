import fastify from 'fastify';

const server = fastify();

server.get<{}>('/', {}, async (_request, reply) => {
  reply.send('Fetching');
});

server.post('/', {}, async (_request, reply) => {
  reply.send('Saving a diary');
});

export default server