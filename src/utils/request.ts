/**
 * axios 二次封装
 * @auther zqq
 * @time 2021/11/07
 */

import Axios from 'axios'   // 引入axios
import  { config }  from '../config/config.local'  // 引入config
import { ElMessage } from 'element-plus'  // 引入element-plus


// 创建axios实例对象， 添加全局配置
const axios = Axios.create({
    // 初始配置请求头  请求api
    baseURL: config.baseApi,
    // 接口持续时间为8秒，否则超时
    timeout: 8000
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
    (response) => {
        /**
         * 根据项目实际情况来对 config 做处理
         * 这里不做任何处理，直接返回
         */
        return response
    },
    (error) => {
        // 抛出异常
        return Promise.reject(error)
    }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
    (response) => {
        /**
         * 根据项目实际情况来对 response 和 error 做处理
         */
        return response
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.message
            ElMessage.error(`Code: ${code}, Message: ${msg}`)
            console.error(`[Axios Error]`, error.response)
        } else {
            // 丢出服务器异常
            ElMessage.error(`${error}`)
        }
        // 抛出异常
        return Promise.reject(error)
    }
)

export default axios