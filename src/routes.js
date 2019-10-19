import {Router} from 'express';

const routes = new Router();

routes.get('/', (res, req) => {
  return res.json({message: ' new Router '});
});

export default routes;
