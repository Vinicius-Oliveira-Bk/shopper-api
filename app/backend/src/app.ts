import express from 'express';
import router from './routes/index';

// app config:

const app = express();

app.use(express.json());

// Rotas:

app.use('/', router);

export default app;
