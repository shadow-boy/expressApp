import express from "express"
import "reflect-metadata"
import userRouter from './controllers/UserController'
import bannerRouter from "./controllers/BannerController"
import middleware from "./middleware/middleware"
import ErrorHandler from "./middleware/errror"
import DBManager from "./database/DBManager"
import PhotoRouter from "./controllers/PhotoController"
import {useExpressServer} from "routing-controllers";


const app = express()
const port = 3000

//普通中间件需要放在路由配置之前
app.use(middleware)


app.get('/', (req, res) => res.send('Hello World!'))


useExpressServer(app, {
    controllers: [__dirname + '/controllers/*{.js,.ts}'], // register controllers routes in our express app
})


//错误处理中间件需要放在路由配置之后
app.use(ErrorHandler)

DBManager.share().then(res => {
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
