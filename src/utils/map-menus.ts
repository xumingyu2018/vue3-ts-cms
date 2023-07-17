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
export function mapMenuToRoutes(menus: any[]) {
    // 1.加载所有的路由对象
    const loadRoutes = loadLocalRoutes()

    // 2.根据菜单获取需要添加的路由对象
    const finalRoutes: RouteRecordRaw[] = []
    for(const menu of menus) {
        for(const submenu of menu.children) {
            const menuUrl = submenu.url
            const route = loadRoutes.find(route => route.path === menuUrl)
            if(route) finalRoutes.push(route)
        }
    }

    return finalRoutes
}