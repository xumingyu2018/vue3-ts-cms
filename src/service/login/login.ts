import { localCache } from "@/utils/cache"
import hyRequest from ".."
import type { IAccount } from "@/types"
 
export function accountLogin(account: IAccount) {
    return hyRequest.post({
        url: '/login',
        data: account
    })
}

 export function getUserInfoById(id: number) {
    return hyRequest.get({
        url: `/users/${id}`,
        // headers: {
        //     Authorization: 'Bearer ' + localCache.getCache('token')
        // }
    })
 }

 export function getUserMenusByRoleId(id: number) {
    return hyRequest.get({
        url: `/role/${id}/menu`,
    })
 }