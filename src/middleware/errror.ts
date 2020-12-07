
import express, { ErrorRequestHandler, RequestHandler } from "express"


let ErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
    console.log(error)
    res.status(500).send('Something broke!')

}

export default ErrorHandler