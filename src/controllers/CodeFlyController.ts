
import { JsonController, Post, Res,Get } from "routing-controllers";


@JsonController("/codefly")
export default class CodeFlyController{

    @Post("/update_check")
    update_check(){
        return res_json
    }
    

}

let res_json = {
    "download_url": "http://qq1w7fz5q.hn-bkt.clouddn.com/bundle.zip",
    "is_available": true,
    "is_disabled": false,
    "target_binary_range": "1.0",
    "package_hash": "8427bdfbdd6c569366152f0f5de3e90600b6dbc2750d91fa7de64e114e921e04",
    "label": "v2",
    "package_size": 3965726,
    "update_app_version": false,
    "should_run_binary_version": false,
    "is_mandatory": true
}