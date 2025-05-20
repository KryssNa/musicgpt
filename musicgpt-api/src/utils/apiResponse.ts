import { Response } from "express";

// --- Custom API Response Helpers for Consistent Output ---

// Numeric codes for API consumer to handle different outcomes
export enum ApiStatusCode {
    SUCCESS = 10000,
    FAILURE = 10001,
    RETRY = 10002,
    INVALID_TOKEN = 10003,
    UNAUTHORIZED = 10004,
    FORBIDDEN = 10005,
    NOT_FOUND = 10006,
    SERVER_ERROR = 10007,
}

// HTTP status codes for API responses
export enum HttpStatus {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
}

// Base class for all API responses
abstract class ApiResponseBase {
    constructor(
        protected apiCode: ApiStatusCode,
        protected httpStatus: HttpStatus,
        protected message: string,
        protected payload?: any
    ) { }

    // Prepares and sends the response
    protected build<T extends ApiResponseBase>(res: Response, response: T): Response {
        return res.status(this.httpStatus).json(ApiResponseBase.clean(response));
    }

    // Sends the response
    public send(res: Response): Response {
        return this.build<ApiResponseBase>(res, this);
    }

    // Removes internal fields and undefined values
    private static clean<T extends ApiResponseBase>(response: T): T {
        const result: T = {} as T;
        Object.assign(result, response);
        // Remove httpStatus from output
        // @ts-ignore
        delete result.httpStatus;
        for (const key in result) if (typeof result[key] === "undefined") delete result[key];
        return result;
    }
}

// Success response with data
export class ApiSuccess extends ApiResponseBase {
    constructor(message: string, data: any) {
        super(ApiStatusCode.SUCCESS, HttpStatus.OK, message, data);
    }
}

// Not found response for missing resources
export class ApiNotFound extends ApiResponseBase {
    private url?: string;
    constructor(message = "Resource not found") {
        super(ApiStatusCode.FAILURE, HttpStatus.NOT_FOUND, message);
    }
    send(res: Response): Response {
        this.url = res.req?.originalUrl;
        return super.build<ApiNotFound>(res, this);
    }
}

export { ApiResponseBase };
