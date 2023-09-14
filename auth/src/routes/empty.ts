import express, {Request, Response} from 'express';
import {NotFoundError} from "../erros/not-found-error";

let router = express.Router();

router.all('*', (req: Request, res: Response) => {
    throw new NotFoundError();
});

export {router as emptyRouter};
