import handler from 'server/handler';

const testHandler = handler({ guard: ['GET'] })
  .get((req, res) => res.send('Test is successful'))
  .post((req, res) => {
    res.send('Test is unsuccessful');
  });

export default testHandler;
