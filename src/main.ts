import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import router from './router'
import pinia from './store'

// 全局注册element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css' 

createApp(App).use(router).use(pinia).mount('#app')
