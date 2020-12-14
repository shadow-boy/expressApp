import { Request, Response } from "express"
import { Body, BodyParam, JsonController, Post, QueryParams, Req, Res } from "routing-controllers"


export class User {
    name: string
    sex: string
    age: number
}



@JsonController("/user")
export default class UserController {

    @Post("/add")
    async add(@Req() req: Request, @Res() res: Response) {
        return req.query
    }
    @Post('/notice')
    async notice(@Body() user: User) {
        return user

    }
}

