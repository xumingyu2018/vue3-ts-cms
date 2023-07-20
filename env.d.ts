/// <reference types="vite/client" />

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent
    export default component
}

// 声明国际化配置文件mjs
declare module '*.mjs'
