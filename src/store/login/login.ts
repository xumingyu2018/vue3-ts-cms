import { defineStore } from "pinia";
import { accountLoginRequest } from '@/service/login/login'

const useLoginStore = defineStore('login', {
    state: () => ({
        id: '',
        token: '',
        username: ''
    }),

    actions: {
        async loginAccountAction(account: any) {
            const loginResult = await accountLoginRequest(account)
            console.log("登录成功");
            this.id = loginResult.id
            this.token = loginResult.token
            this.username = loginResult.username
        }
    }
})

export default useLoginStore