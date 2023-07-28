import hyRequest from "@/service";

// 获取用户列表数据
export function getUserListData(queryInfo: any) {
    return hyRequest.post({
        url: '/users/list',
        data: queryInfo
    })
}

// 删除用户数据
export function deleteUserData(id: number) {
    return hyRequest.delete({
        url: `/users/${id}`
    })
}   

// 新建用户数据
export function newUserData(userInfo: any) {
    return hyRequest.post({
        url: '/users',
        data: userInfo
    })
}