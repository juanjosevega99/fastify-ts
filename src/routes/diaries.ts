import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

async function dairies(server) {
  server.get('/', {}, async (_request, reply) => {
    reply.send(diaryServices.getEntriesWithoutSensitiveInfo);
  });

  server.get(':/id', (request, reply) => {
    const diary = diaryServices.findById(+request.params.id);

    return diary != null ? reply.send(diary) : reply.sendStatus(404);
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
}

export default dairies;
