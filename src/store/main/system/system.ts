import { deleteUserData, editUserData, getUserListData, newUserData, deletePageData, editPageData, getPageListData, newPageData } from "@/service/main/system/system";
import { defineStore } from "pinia";
import type { ISystemState } from "./type";

const useSystemStore = defineStore('system', {
    state: (): ISystemState => ({
        usersList: [],
        usersTotalCount: 0,

        // 抽取公共页面数据
        pageList: [],
        pageTotalCount: 0
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
        },

        // 编辑用户数据
        async editUserDataAction(id: number, userInfo: any) {
            const editResult = await editUserData(id, userInfo)
            this.getUsersListAction({ offset: 0, size: 10 })
        },

        // 抽取公共页面action
        async getPageListDataAction(pageName: string, queryInfo: any) {
            // 1.请求用户列表数据
            const pageListResult = await getPageListData(pageName, queryInfo)
            const { list, totalCount } = pageListResult.data
            this.pageList = list
            this.pageTotalCount = totalCount
        },
        async deletePageDataAction(pageName: string, id: number) {
            const res = await deletePageData(pageName, id)
            this.getPageListDataAction(pageName, { offset: 0, size: 10 })
        },
        async newPageDataAction(pageName: string, pageData: any) {
            const res = await newPageData(pageName, pageData)
            this.getPageListDataAction(pageName, { offset: 0, size: 10 })
        },
        async editPageDataAction(pageName: string, id: number, pageData: any) {
            const res = await editPageData(pageName, id, pageData)
            this.getPageListDataAction(pageName, { offset: 0, size: 10 })
        }
                
    }
})

export default useSystemStore