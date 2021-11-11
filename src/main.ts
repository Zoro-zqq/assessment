import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { config } from './config/config.local'

//element-plus
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)
app.config.globalProperties.config = config //全局挂载

app
.use(router)
.use(store)
.use(ElementPlus)
.mount('#app')
