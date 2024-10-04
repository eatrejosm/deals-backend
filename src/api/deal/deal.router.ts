import { Router } from 'express';
import dealController from './deal.controller';

const dealRouter = Router();
dealRouter.get('/:id', dealController.findById);
dealRouter.get('/', dealController.search);
dealRouter.post('/', dealController.create);
export default dealRouter;
