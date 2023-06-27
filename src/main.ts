import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'

// 针对ElMessage和ElLoading等组件引入样式(手动按需引入)
import 'element-plus/theme-chalk/el-message.css'     

// 全局注册element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 安装vite-plugin-style-import/consola并配置vite.config.ts（自动按需引入样式）

createApp(App).use(router).use(pinia).use(registerIcons).mount('#app')
