import { Router } from 'express';
import dealController from './deal.controller';

const dealRouter = Router();
dealRouter.get('/', dealController.findById);
dealRouter.post('/', dealController.create);
export default dealRouter;
