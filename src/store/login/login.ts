import { defineStore } from "pinia";
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from "@/types";

const useLoginStore = defineStore('login', {
    state: () => ({
        id: '',
        token: '',
        username: ''
    }),

    actions: {
        async loginAccountAction(account: IAccount) {
            const loginResult = await accountLoginRequest(account)
            console.log("登录成功");
            this.id = loginResult.data.id
            this.token = loginResult.data.token
            this.username = loginResult.data.username
        }
    }
})

export default useLoginStore