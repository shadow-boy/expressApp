import express from "express"
import "reflect-metadata"
import middleware from "./middleware/middleware"
import ErrorHandler from "./middleware/errror"
import DBManager from "./database/DBManager"
import {useExpressServer} from "routing-controllers";
import SportsNewsController from "./controllers/SportsNewsController"


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
    let newsController = new SportsNewsController()
    newsController.importData()
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
