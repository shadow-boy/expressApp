import express from "express"
import "reflect-metadata"
import DBManager from "./database/DBManager"
import { useContainer, useExpressServer } from "routing-controllers";
import SportsNewsController from "./controllers/SportsNewsController"
import { Container } from "typedi/Container";


const app = express()
const port = 3000

useContainer(Container)



useExpressServer(app, {
    controllers: [__dirname + '/controllers/*{.js,.ts}'],
    defaultErrorHandler: false,
    middlewares: [__dirname + '/middlewares/*{.js,.ts}'],
    interceptors: [__dirname + '/interceptors/*{.js,.ts}'],
})


function errorHandler(err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
}
app.use(errorHandler)


DBManager.share().then(res => {
    // let newsController = new SportsNewsController()
    // newsController.importData()
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
