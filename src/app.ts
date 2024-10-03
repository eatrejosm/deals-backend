import express from 'express';
import errorHandler from './middlewares/errorHandler';
import dealRouter from './api/deal/deal.router';

const app = express();

app.use(express.json());
app.use(errorHandler);

app.use('/api/deals', dealRouter);

export default app;
