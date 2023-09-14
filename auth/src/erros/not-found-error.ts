import {CustomError} from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode = 200;
    constructor() {
        super('Not found rout!!');

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{
            message: 'Not fff',
        }];
    }
}
