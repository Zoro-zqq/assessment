import { createRouter, createWebHistory } from "vue-router"
import routerMap from './modules'

const router = createRouter({
    history: createWebHistory(),
    // 在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        else return { top: 0 }
    },
    routes: routerMap
})

//全局路由守卫（代码过多时拆分到中间件文件夹）
router.beforeEach((to: any, from: any, next) => {

})

router.afterEach((to, from, next) => {
})

export default router