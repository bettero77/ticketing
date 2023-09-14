import express, {Request, Response} from 'express';
import {body, validationResult } from 'express-validator';
import {RequestValidationError} from "../erros/request-validation-error";
import {DatabaseConnectionError} from "../erros/database-connection-error";

let router = express.Router();

router.post('/api/users/signup', [
    body('email').isEmail().withMessage('fix email'),
    body('password').trim().isLength({min: 4, max: 20}).withMessage('fix pass')
], (req: Request, res: Response) => {
    let errors = validationResult(req);
    if (!errors.isEmpty())
        throw new RequestValidationError(errors.array());
    let {email, password} = req.body;

    console.log('Creating user');
    throw new DatabaseConnectionError();

    res.send({});
});

export {router as signupRouter};
