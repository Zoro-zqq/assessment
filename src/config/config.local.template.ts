export interface apiConfig {
    env: string // 开发环境
    title: string // 项目title
    baseApi?: string // api请求地址
}

const dev: apiConfig = {
    env: "development",
    title: "开发",
    baseApi: "/api", //本地api请求地址
}

const prod: apiConfig = {
    env: "production",
    title: "生产",
    baseApi: "https://www.drcloud.me/api", //线上api请求地址

}

export const config: apiConfig = import.meta.env.MODE == 'development' ? dev : prod