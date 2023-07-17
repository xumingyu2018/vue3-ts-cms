import { defineStore } from "pinia";
import { accountLogin, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";
import { mapMenuToRoutes } from "@/utils/map-menus";
import router from "@/router";

interface ILoginState {
    token: string,
    userInfo: any,
    userMenus: any
}

const useLoginStore = defineStore('login', {
    state: (): ILoginState => ({
        // token: localStorage.getItem('token') ?? '',
        token: localCache.getCache('token') ?? '',
        userInfo: localCache.getCache('userInfo') ?? {},
        userMenus: localCache.getCache('userMenus') ?? []
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // 1. 帐号登录，axios获取token等信息
            const loginResult = await accountLogin(account)

            const id = loginResult.data.id
            this.token = loginResult.data.token

            // 2. 本地缓存token（使用封装的cache工具）
            // localStorage.setItem('token', this.token)
            localCache.setCache('token', this.token)

            // 3.获取登录用户的详细信息（role角色信息）
            const userInfoResult = await getUserInfoById(id)
            this.userInfo = userInfoResult.data 

            // 4.根据角色请求用户的权限（菜单menus）
            const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
            this.userMenus = userMenusResult.data

            // 5.进行用户权限信息缓存
            localCache.setCache('userInfo', this.userInfo)
            localCache.setCache('userMenus', this.userMenus)

            // 6.根据菜单menu动态加载路由(使用工具类map-menus.ts)
            const routes = mapMenuToRoutes(this.userMenus)
            // 这里的'main'是根据路由里的name属性来的
            routes.forEach(route => router.addRoute('main', route))

            //  页面跳转
            router.push('/main')
        }
    }
})

export default useLoginStore 