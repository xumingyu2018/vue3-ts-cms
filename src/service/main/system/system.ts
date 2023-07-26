import hyRequest from "@/service";

// 获取用户列表数据
export function getUserListData(queryInfo: any) {
    return hyRequest.post({
        url: '/users/list',
        data: queryInfo
    })
}