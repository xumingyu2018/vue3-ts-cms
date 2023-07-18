import { localCache } from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login', 
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/Main.vue'),
      // 以下替换成动态注册路由的方法
      // children: [
      //   {
      //     path: '/main/analysis/overview',
      //     component: () => import('../views/main/analysis/overview/overview.vue')
      //   },
      //   {
      //     path: '/main/analysis/dashboard',
      //     component: () => import('../views/main/analysis/dashboard/dashboard.vue')
      //   },
      //   {
      //     path: '/main/system/role',
      //     component: () => import('../views/main/system/role/role.vue')
      //   },
      //   {
      //     path: '/main/system/user',
      //     component: () => import('../views/main/system/user/user.vue')
      //   }
      // ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  const token = localCache.getCache('token')  

  if(to.path === '/main' && !token) {
      return '/login'
  }

  if(to.path === '/main') {
    return firstMenu.url
  }
})

export default router