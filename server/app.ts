import express from 'express';
import indexRouter from './routes/index';

const app = express();

app.use(express.json());
app.use('/api', indexRouter);

export default app;

