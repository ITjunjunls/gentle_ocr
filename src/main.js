import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus, {ElButton, ElDivider, ElMessage, ElNotification} from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import store from './store'


const plugins = [
    ElNotification,
    ElMessage,
    ElDivider
]


createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(store)
    .use(plugins)
    .mount('#app')
