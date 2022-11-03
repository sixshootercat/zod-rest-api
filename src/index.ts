import express from 'express';
import loginRouter from './routes/login.route';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(loginRouter);

app.listen(PORT);
console.log('server on port', PORT);
