import request from './request'

export function getUser(params){
    return request({
        url: '',
        method: 'get',
        params: params
    })
}

export function loginUser(data){
    return request({
        url: '',
        method: 'post',
        data
    })
}