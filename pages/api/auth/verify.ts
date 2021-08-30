import handler from 'server/handler';

const VerifyHandler = handler({ guard: ['GET'] }).get();

export default VerifyHandler;
