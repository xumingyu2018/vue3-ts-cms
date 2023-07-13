import { defineStore } from "pinia";
import { accountLogin, getUserInfoById } from '@/service/login/login'
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";
import router from "@/router";

interface ILoginState {
    token: string,
    userInfo: any
}

const useLoginStore = defineStore('login', {
    state: (): ILoginState => ({
        // token: localStorage.getItem('token') ?? '',
        token: localCache.getCache('token') ?? '',
        userInfo: {}
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // 1. 帐号登录，axios获取token等信息
            const loginResult = await accountLogin(account)

            const id = loginResult.data.id
            this.token = loginResult.data.token

            // 2. 进行本地缓存（使用封装的cache工具）
            // localStorage.setItem('token', this.token)
            localCache.setCache('token', this.token)

            // 3.获取登录用户的详细信息（role角色信息）
            const userInfoResult = await getUserInfoById(id)
            this.userInfo = userInfoResult.data

            // 4.根据角色请求用户的权限（菜单menus）

            //  页面跳转
            router.push('/main')
        }
    }
})

export default useLoginStore 