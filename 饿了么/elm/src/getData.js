import {Request} from "@/req.js"

export const login =data=>Request.getData({
    url:`/api/cities?type=guess`,
    method:"get",
    data,
})
export const login1 =data=>Request.getData({
    url:`/api/cities?type=hot`,
    method:"get",
    data
})
export const login2 =data=>Request.getData({
    url:`/api/cities?type=group`,
    method:"get",
    data
})
export const xq =(data,id)=>Request.getData({
    url:`/api/cities/`+id,
    method:"get",
    data
})
export const ss =data=>Request.getData({
    url:`/api/pois`,
    method:"get",
    data
})
export const zyxq =(data,geohash)=>Request.getData({
    url:`/url/pois/`+geohash,
    method:"get",
    data
})
export const lb =data=>Request.getData({
    url:`/url/index_entry`,
    method:"get",
    data
})
export const sj =data=>Request.getData({
    url:`/list/shopping/restaurants`,
    method:"get",
    data
})
export const sjxq =(data,id)=>Request.getData({
    url:`/list/shopping/restaurant/`+id,
    method:"get",
    data
})
export const dh =data=>Request.getData({
    url:`/list/shopping/v2/menu`,
    method:"get",
    data
})