import { defineStore } from "pinia";
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";
import router from "@/router";

const useLoginStore = defineStore('login', {
    state: () => ({
        id: '',
        // token: localStorage.getItem('token') ?? '',
        token: localCache.getCache('token') ?? '',
        username: ''
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // 1. 帐号登录，axios获取token等信息
            // const loginResult = await accountLoginRequest(account)
            if(account.username === 'admin123' && account.password === '123456') {
                // this.id = loginResult.data.id
                // this.token = loginResult.data.token
                // this.username = loginResult.data.username
                this.id = '1'
                this.token = '260602448'
            }

            // 2. 进行本地缓存（使用封装的cache工具）
            // localStorage.setItem('token', this.token)
            localCache.setCache('token', this.token)

            // 3. 页面跳转
            router.push('/main')
        }
    }
})

export default useLoginStore