import express, { RequestHandler } from "express"

let middleware :RequestHandler = (req, res, next) => {
    let date = new Date()
    let currentTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    
    let action =  req.path
    let query = req.query

    console.log(`${currentTime} \nmethod=${req.method} \nurl=${action} \nquery=${JSON.stringify(query)}`);
    console.log(`---------------------------------------------------------------------------------------------------------`);
    

    next()
}

export default middleware


