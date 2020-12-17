import { Body, JsonController, Post } from "routing-controllers";
import { Repository } from "typeorm";
import DBManager from "../database/DBManager";
import NewsSports, { SportsTypeEnum } from "../entity/NewsSports";
import NewsYingchao from "../entity/NewsYingchao";
import BaseReq from "../models/request/BaseReq";
import dataList_cba from "./news/basketball_cba";
import dataList_football from "./news/football";
import dataList_game from "./news/game";
import dataList_yinchao from "./news/yinchao";


@JsonController("/news")
export default class SportsNewsController {


    async importData() {

        let dataList = dataList_yinchao
        dataList.forEach(async (item, index) => {
            let connect = await DBManager.share()
            let newsRepository = connect.getRepository(NewsYingchao)
            let news = new NewsYingchao()
            Object.assign(news, item)
            await news.save()
            console.log(`${index}/${dataList.length}`);



        })

    }

    @Post("/error")
    error() {
        throw new Error("默认错误")
    }

    @Post("/list")
    async newList(@Body() para: BaseReq): Promise<Array<NewsSports>> {

        let connect = await DBManager.share()
        let newsRepository = connect.getRepository(NewsSports)

        let news = await newsRepository.
            createQueryBuilder().
            skip(para.page * para.size).
            take(para.size).
            getMany()
        return news

    }


    @Post("/yingchaolist")
    async newsyingchaoList(@Body() para: BaseReq): Promise<Array<NewsYingchao>> {

        let connect = await DBManager.share()
        let newsRepository = connect.getRepository(NewsYingchao)

        let news = await newsRepository.
            createQueryBuilder().
            skip(para.page * para.size).
            take(para.size).
            getMany()
        return news

    }

}