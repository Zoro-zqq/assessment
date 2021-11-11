import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

export default ({mode}) => {
    return defineConfig({
        plugins: [vue()],
        base: './',   // 设置打包路径
        //配置别名绝对路径
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
                "@assets": resolve(__dirname, "./src/assets"),
                "@components": resolve(__dirname, "./src/components"),
                "@views": resolve(__dirname, "./src/views"),
                "@store": resolve(__dirname, "./src/store"),
            }
        },
        //构建打包输出目录
        build: {
            outDir: "dist",
        },
        server: {
            port: 8080, // 端口号
            open: true, // 服务启动时是否自动打开浏览器
            https: false, // 是否开启 https
            cors: true, // 允许跨域
            // 跨域代理
            proxy: {
                "/api": {
                    target: loadEnv(mode, process.cwd()).VITE_APP_BASE_API, // 后台接口
                    changeOrigin: true,
                    // secure: false, // 如果是https接口，需要配置这个参数
                    // ws: true, //websocket支持
                    // 截取api，并用""代替
                    // rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
    })
}
