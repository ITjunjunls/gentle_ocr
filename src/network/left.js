import {request} from "@/network/request";

export function getImageList(){
    return request({
        url: '/main/getimagelist'
    })
}

