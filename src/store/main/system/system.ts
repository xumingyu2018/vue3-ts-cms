import { deleteUserData, getUserListData } from "@/service/main/system/system";
import { defineStore } from "pinia";
import type { ISystemState } from "./type";

const useSystemStore = defineStore('system', {
    state: (): ISystemState => ({
        usersList: [],
        usersTotalCount: 0
    }),
    actions: {
        // 获取用户数据列表
        async getUsersListAction(queryInfo: any) {
            // 调用axios请求
            const userListResult = await getUserListData(queryInfo)
            const { totalCount, list } = userListResult.data
            // 存入store中
            this.usersList = list
            this.usersTotalCount = totalCount
        },

        // 删除用户数据
        async deleteUserDataAction(id: number) {
            // 调用axios请求
            const res = await deleteUserData(id)
            // 重新请求数据刷新页面
            this.getUsersListAction({ offset: 0, size: 10 })
        }
    }
})

export default useSystemStore