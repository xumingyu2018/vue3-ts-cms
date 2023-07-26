import { getUserListData } from "@/service/main/system/system";
import { defineStore } from "pinia";
import type { ISystemState } from "./type";

const useSystemStore = defineStore('system', {
    state: (): ISystemState => ({
        usersList: [],
        usersTotalCount: 0
    }),
    actions: {
        async getUsersListAction(queryInfo: any) {
            // 调用axios请求
            const userListResult = await getUserListData(queryInfo)
            const { totalCount, list } = userListResult.data
            // 存入store中
            this.usersList = list
            this.usersTotalCount = totalCount
        }
    }
})

export default useSystemStore