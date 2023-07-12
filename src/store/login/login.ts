import { defineStore } from "pinia";
import { accountLogin } from '@/service/login/login'
import type { IAccount } from "@/types";
import { localCache } from "@/utils/cache";
import router from "@/router";

const useLoginStore = defineStore('login', {
    state: () => ({
        id: '',
        // token: localStorage.getItem('token') ?? '',
        token: localCache.getCache('token') ?? '',
        name: ''
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            // 1. 帐号登录，axios获取token等信息
            const loginResult = await accountLogin(account)
            console.log(loginResult.data);
            this.id = loginResult.data.id
            this.token = loginResult.data.token
            this.name = loginResult.data.name
                

            // 2. 进行本地缓存（使用封装的cache工具）
            // localStorage.setItem('token', this.token)
            localCache.setCache('token', this.token)

            // 3. 页面跳转
            router.push('/main')
        }
    }
})

export default useLoginStore 