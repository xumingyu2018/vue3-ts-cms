import type { RouteRecordRaw } from "vue-router"

// 自动化加载所有的路由（也可以收到写死）
function loadLocalRoutes() {
  // 1.加载所有的模板
  const modules: Record<string, any> = import.meta.glob('../router/main/**/*.ts', { eager: true })

  // 2.遍历所有的模板为路由对象
  const routes: RouteRecordRaw[] = []
  for (const key in modules) {
    const route = modules[key].default
    routes.push(route)
  }
  return routes
}

/**
 * 映射菜单到路由
 * @param menus 菜单
 * @returns 路由
 */
export let firstMenu: any = null
export function mapMenuToRoutes(menus: any[]) {
    // 1.加载所有的路由对象
    const loadRoutes = loadLocalRoutes()

    // 2.根据菜单获取需要添加的路由对象
    const finalRoutes: RouteRecordRaw[] = []
    for(const menu of menus) {
        for(const submenu of menu.children) {
            const route = loadRoutes.find(route => route.path === submenu.url)
            if(route) {
                // 给route的顶层菜单增加重定向功能（但是只需要添加一次即可）
                if(!finalRoutes.find((item) => item.path === route.path)) {
                    finalRoutes.push({ path: menu.url, redirect: route})
                }
                finalRoutes.push(route)
            }
            // 记录第一个被匹配菜单
            if(!firstMenu && route) firstMenu = submenu
        }
    }

    return finalRoutes
}

/**
 * 映射路由到菜单
 * @param path 路由url
 * @param menus 菜单
 * @returns 菜单
 */
export function mapPathToMenu(menus: any[], path: string) {
    for (const menu of menus) {
      for (const submenu of menu.children) {
        if (path === submenu.url) return submenu
      }
    }
}

export function mapPathToBreadCrumb(menus: any[], path: string) {
    const breadCrumb: any[] = []
    
    for (const menu of menus) {
      for (const submenu of menu.children) {
        if (path === submenu.url){
            breadCrumb.push(menu)
            breadCrumb.push(submenu)
            return breadCrumb
        }
      }
    }
}

/**
 * 菜单映射到id的列表（用于角色管理的权限树分配）
 * @param menuList 
 */
export function mapMenuListToIds(menuList: any[]) {
  const ids: number[] = []

  function recurseGetId(menus: any[]) {
    for(const item of menus) {
      // 如果有子菜单，就递归直到没有子菜单，然后把id添加到ids中
      if(item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  
  recurseGetId(menuList)
  return ids
}