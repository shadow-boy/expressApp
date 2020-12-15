import { IsEmail, MinLength } from "class-validator"
import { Request, Response } from "express"
import { Body, BodyParam, JsonController, Post, QueryParams, Req, Res } from "routing-controllers"
import ExampleService from "../services/ExampleService"


export class User {
    name: string
    sex: string
    age: number
}

export class CheckUser {
    @IsEmail()
    email: string

    @MinLength(6)
    password: string
}


@JsonController("/user")
export default class UserController {
    constructor(private exampleService: ExampleService) { }

    @Post("/add")
    async add(@Req() req: Request, @Res() res: Response) {
        return req.query
    }
    @Post('/notice')
    async notice(@Body() user: User) {
        return user

    }
    @Post("/login")
    async login(@Body() user: CheckUser) {
        this.exampleService.printMessage()

        return user

    }
}

