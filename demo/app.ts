import cors from 'cors';
import express, { Application } from 'express';
import expressPino, { HttpLogger } from 'express-pino-logger';
import helmet from 'helmet';
import pino, { Logger } from 'pino';

const app: Application = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
}

export default app;