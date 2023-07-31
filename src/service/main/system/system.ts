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

// 编辑用户数据
export function editUserData(id: number, userInfo: any) {
    return hyRequest.patch({
        url: `/users/${id}`,
        data: userInfo
    })
}

/** 抽取公共页面接口 */
export function getPageListData(pageName: string, queryInfo: any) {
    return hyRequest.post({
      url: `/${pageName}/list`,
      data: queryInfo
    })
  }
  
  export function deletePageData(pageName: string, id: number) {
    return hyRequest.delete({
      url: `/${pageName}/${id}`
    })
  }
  
  export function newPageData(pageName: string, dataInfo: any) {
    return hyRequest.post({
      url: `/${pageName}`,
      data: dataInfo
    })
  }
  
  export function editPageData(pageName: string, id: number, dataInfo: any) {
    return hyRequest.patch({
      url: `/${pageName}/${id}`,
      data: dataInfo
    })
  }