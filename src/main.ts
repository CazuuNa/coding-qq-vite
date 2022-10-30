import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import 'normalize.css/normalize.css'

import SvgIcon from '@/components/SvgIcon/index.vue'
import './assets/iconfont/iconfont.js';


const app = createApp(App)
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.use(router)
app.component('SvgIcon', SvgIcon);

app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
