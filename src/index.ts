import express from "express"
import "reflect-metadata"
import DBManager from "./database/DBManager"
import { useContainer, useExpressServer } from "routing-controllers";
import SportsNewsController from "./controllers/SportsNewsController"
import { Container } from "typedi/Container";
import log4js from "./utils/log4js";
import WrapResponse from "./models/response/WrapResponse";
import expressJWT from 'express-jwt'
import config from "./config";


const app = express()
const port = 3000

useContainer(Container)



useExpressServer(app, {
    controllers: [__dirname + '/controllers/*{.js,.ts}'],
    defaultErrorHandler: false,
    middlewares: [__dirname + '/middlewares/*{.js,.ts}'],
    interceptors: [__dirname + '/interceptors/*{.js,.ts}'],
})

log4js(app)

// 使用expressJWT 验证token是否过期
app.use(expressJWT({
    secret: config.jwtSecret // 签名的密钥 或 PublicKey
}).unless({ // 设置并规定哪些路由不用验证 token
    path: ['/api/hello'] // 指定路径不经过 Token 解析
}));

//当token失效返回提示信息 时间过期了执行这一条
app.use((err, req, res, next) => {
    // console.log(req);
    if (err.status === 401) {
        let resError = new WrapResponse()
        resError.code = err.status
        resError.message = 'token失效'
        resError.success = false

        return res.json(resError)
    }
});

DBManager.share().then(res => {
    // let newsController = new SportsNewsController()
    // newsController.importData()
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
