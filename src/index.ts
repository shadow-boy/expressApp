import express from "express"
import "reflect-metadata"
import userRouter from './routers/user'
import bannerRouter from "./routers/banner"
import middleware from "./middleware/middleware"
import ErrorHandler from "./middleware/errror"
import DBManager from "./database/DBManager"


const app = express()
const port = 3000

//普通中间件需要放在路由配置之前
app.use(middleware)



app.get('/', (req, res) => res.send('Hello World!'))

app.use("/user", userRouter)
app.use("/banner", bannerRouter)
// app.use("/static",express.static(__dirname+"/public"))


//错误处理中间件需要放在路由配置之后
app.use(ErrorHandler)

DBManager.share().then(res => {
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
