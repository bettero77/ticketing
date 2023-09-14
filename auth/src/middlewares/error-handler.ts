import { Request, Response, NextFunction } from "express";
import {CustomError} from "../erros/custom-error";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('666', error, req.baseUrl)
    if (error instanceof CustomError) {
        // res.status(error.statusCode).send({
        //     errors: error.serializeErrors()
        // })
        res.status(200).send({
            errors: '123'
        })
    }
    res.status(400).send({
        errors: [{message: error.message}]
    })
}
