import {request} from "@/network/request";

export function changePicToGrey(filepath) {
    return request({
        url: 'http://localhost:8181/archiveimg/function/grey?filepath=' + filepath,
        method: 'get'
    })
}

export function changePicIntoBinary(filepath) {
    return request({
        url: 'http://localhost:8181/archiveimg/function/binary?filepath=' + filepath,
        method: 'get'
    })
}

export function rotatePicLeft(filepath) {
    return request({
        url: 'http://localhost:8181/archiveimg/function/rotate?rot=0&filepath=' + filepath,
        method: 'get'
    })
}

export function rotatePicRight(filepath) {
    return request({
        url: 'http://localhost:8181/archiveimg/function/rotate?rot=1&filepath=' + filepath,
        method: 'get'
    })
}
