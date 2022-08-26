import fastify from 'fastify';
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils';

const server = fastify();

server.get('/', {}, async (_request, reply) => {
  reply.send();
});

server.post('/', {}, async (request, reply) => {
  try {
    const NewDiaryEntry = toNewDiaryEntry(request.body);
    const addedDiaryEntry = diaryServices.addDiary(NewDiaryEntry);

    reply.send(addedDiaryEntry);
  } catch (error) {
    reply.status(400).send(error);
  }
});

export default server;
