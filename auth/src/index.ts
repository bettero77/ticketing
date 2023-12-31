import express, {Request, Response} from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import {NotFoundError} from "./erros/not-found-error";
import {emptyRouter} from "./routes/empty";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(emptyRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listen 3000!!!');
});
