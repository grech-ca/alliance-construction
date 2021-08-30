import handler from 'server/handler';

const testHandler = handler({ guard: ['GET'] })
  .get((req, res) => res.send('Get is allowed'))
  .post((req, res) => {
    res.send('Post is allowed');
  });

export default testHandler;
