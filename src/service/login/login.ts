import { localCache } from "@/utils/cache"
import hyRequest from ".."
import type { IAccount } from "@/types"
 
export function accountLogin(account: IAccount) {
    return hyRequest.post({
        url: '/login',
        data: account
    })
}

// 获取用户详细信息
export function getUserInfoById(id: number) {
    return hyRequest.get({
        url: `/users/${id}`,
        // headers: {
        //     Authorization: 'Bearer ' + localCache.getCache('token')
        // }
    })
}

// 获取角色权限信息
export function getUserMenusByRoleId(id: number) {
    return hyRequest.get({
        url: `/role/${id}/menu`,
    })
}