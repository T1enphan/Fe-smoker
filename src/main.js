import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Default from './Layout/Wrapper/index.vue'
import Default from './layout/wrapper/index.vue'
import Toaster from '@meforma/vue-toaster'
const app = createApp(App)

app.use(router,Toaster)
app.component("default-layout", Default);
app.mount("#app")