
import { JsonController, Post, Res,Get } from "routing-controllers";


@JsonController("/codefly")
export default class CodeFlyController{

    @Post("/update_check")
    update_check(){
        return res_json_update_android
    }
    

}


let res_json_update_ios = {
    "download_url": "https://lc-gluttony.s3.amazonaws.com/Wio0qWe2nTH3/W22bvnvOccTSMAkfcoa5GsB2FmbUoHBI/bundle_ios.zip",
    "is_available": true,
    "is_disabled": false,
    "target_binary_range": "1.0",
    "package_hash": "8427bdfbdd6c569366152f0f5de3e90600b6dbc2750d91fa7de64e114e921e22",
    "label": "v2",
    "package_size": 3965726,
    "update_app_version": false,
    "should_run_binary_version": false,
    "is_mandatory": true
}

let res_json_update_android = {
    "download_url": "https://lc-gluttony.s3.amazonaws.com/Wio0qWe2nTH3/pLMBA6Pdb5YqT5lJvAAPA227NtzzukAc/bundle_android_v3.zip",
    "is_available": true,
    "is_disabled": false,
    "target_binary_range": "1.0",
    "package_hash": "8427bdfbdd2750d91fa7de64e114e921e22",
    "label": "v2",
    "package_size": 3965726,
    "update_app_version": false,
    "should_run_binary_version": false,
    "is_mandatory": true
}