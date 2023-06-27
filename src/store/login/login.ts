import { defineStore } from "pinia";
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from "@/types";

const useLoginStore = defineStore('login', {
    state: () => ({
        id: '',
        token: localStorage.getItem('token') ?? '',
        username: ''
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            const loginResult = await accountLoginRequest(account)
            console.log("登录成功");
            this.id = loginResult.data.id
            this.token = loginResult.data.token
            this.username = loginResult.data.username

            // 进行本地缓存
            localStorage.setItem('token', this.token)
        }
    }
})

export default useLoginStore