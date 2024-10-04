import express from 'express';
import errorHandler from './middlewares/errorHandler';
import dealRouter from './api/deal/deal.router';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use('/api/deals', dealRouter);

export default app;
