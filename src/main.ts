import './assets/main.css'
import vueSpatialNavigation from 'vue-spatial-nav'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueSpatialNavigation, { enterTo: 'last-focused' })

app.mount('#app')

const context = cast.framework.CastReceiverContext.getInstance()
context.start({ disableIdleTimeout: true })
