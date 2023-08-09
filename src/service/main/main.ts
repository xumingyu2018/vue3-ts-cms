import hyRequest from ".."

export function getEntireRoles() {
    return hyRequest.post({
        url: "/role/list"
    })
}

export function getEntireDepartments() {
    return hyRequest.post({
        url: "/department/list"
    })
}

// 获取所有菜单
export function getEntireMenus() {
    return hyRequest.post({
        url: "/menu/list"
    })
}