import hyRequest from "@/service";

// 获取用户列表数据
export function getUserListData() {
    return hyRequest.post({
        url: '/users/list',
        data: {
            offset: 0,
            size: 10
        }
    })
}