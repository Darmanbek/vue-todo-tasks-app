import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import ElementPlus from "element-plus"
import { createPinia } from "pinia"

import { createApp } from "vue"

import App from "./app.vue"
import router from "./router"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "./assets/main.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.mount("#app")
