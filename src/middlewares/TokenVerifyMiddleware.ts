import express, { NextFunction, Request, RequestHandler, Response } from "express"
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers"
import JWTUtils from "../utils/jwt"


const unlessTokenVerifyPaths = ["/user/login", "/user/appLogin"]

@Middleware({ type: "before" })
export default class TokenVerifyMiddleware {
    use(request: Request, response: Response, next: NextFunction) {

        if (unlessTokenVerifyPaths.indexOf(request.path) > -1) {
            next()
            return
        }

        let authorization = request.headers.authorization
        if (!authorization) {
            let error = new Error("未登录")
            next(error)
            return
        }

        let user = JWTUtils.decode(authorization)
        console.log(`Authorization---`, user);

        if (!user) {
            let error = new Error("authorization校验失败")
            
            next(error)
            return
        }

        next()


    }
}