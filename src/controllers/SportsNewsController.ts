import { JsonController, Post } from "routing-controllers";
import DBManager from "../database/DBManager";
import NewsSports from "../entity/NewsSports";
import dataList_cba from "./news/basketball_cba";


@JsonController("/news")
export default class SportsNewsController {

    async importData() {

        let dataList = dataList_cba
        dataList.forEach(async (item, index) => {
            let connect = await DBManager.share()
            let newsRepository = connect.getRepository(NewsSports)
            let news = new NewsSports()
            Object.assign(news, item)
            await news.save()
            console.log(`${index}/${dataList.length}`);

        })

    }

    @Post("/error")
    error() {
        throw new Error("默认错误")
    }

}