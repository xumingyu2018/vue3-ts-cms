import { deleteUserData, getUserListData, newUserData } from "@/service/main/system/system";
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
            const deleteResult = await deleteUserData(id)
            // 重新发送请求数据刷新页面
            this.getUsersListAction({ offset: 0, size: 10 })
        },

        // 新增用户数据
        async newUserDataAction(userInfo: any) {
            // 创建新的用户
            const newResult =  await newUserData(userInfo)
            // 重新发送请求数据刷新页面
            this.getUsersListAction({ offset: 0, size: 10 })
        }
    }
})

export default useSystemStore