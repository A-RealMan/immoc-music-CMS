import request from '@/utils/request'
const URL_BASE='http://localhost:3000'

export function fetchList(){
    return request({
        url:`${URL_BASE}/swiper/list`,
        method:'get'
    })
}

export function del(params){
    return request({
        params,
        url:`${URL_BASE}/swiper/del`,
        method:'get'
    })
}