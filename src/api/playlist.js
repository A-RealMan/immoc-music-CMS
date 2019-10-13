import request from '@/utils/request'
const URL_BASE='http://localhost:3000'

export function fetchList(params){
    return request({
        params,
        url: `${URL_BASE}/playlist/list`,
        method: 'get'
    })

}

export function fetchById(params) {
    return request({
        params,
        url: `${URL_BASE}/playlist/getById`,
        method: 'get',
    })
}

export function update(params) {
    return request({
        url: `${URL_BASE}/playlist/updatePlaylist`,
        data: {
            ...params
        },
        method: 'post',
    })
}
export function del(params) {
    return request({
        params,
        url: `${URL_BASE}/playlist/del`,
        method:'get'
    })
}
