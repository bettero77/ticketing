import express, {Request, Response} from 'express';
import {body, validationResult } from 'express-validator';

let router = express.Router();

router.post('/api/users/signup', [
    body('email').isEmail().withMessage('fix email'),
    body('password').trim().isLength({min: 4, max: 20}).withMessage('fix pass')
], (req: Request, res: Response) => {
    let errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).send(errors.array())
    let {email, password} = req.body;

    console.log('Creating user');
    res.send({});
});

export {router as signupRouter};
