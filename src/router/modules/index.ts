import { RouteRecordRaw } from "vue-router"
import userRouter from './user'

const routerMap: Array<RouteRecordRaw> = [
    ...userRouter
]

export default routerMap