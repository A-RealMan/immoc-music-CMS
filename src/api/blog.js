import request from '@/utils/request'
const URL_BASE='http://localhost:3000'


    export function fetchList(params){
        return request({
            url: `${URL_BASE}/blog/list`,
            method: 'get',
            params:{
                ...params
            }
        })
    }

    export function del(params){
        return request({
            url: `${URL_BASE}/blog/delete`,
            data:{
                ...params
            },
            method: 'post',
        })
    }
