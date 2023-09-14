import {ValidationError} from 'express-validator'
import e from "express";
import {CustomError} from "./custom-error";

export class RequestValidationError extends CustomError {
    statusCode = 400

    constructor(public errors: ValidationError[]) {
        super('Req invalid');

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.errors.map(err => {
            if (err.type === 'field')
                return {
                    message: err.msg, field: err.path
                }
            return { message: err.msg }
        })
    }
}