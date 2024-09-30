import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import dict from './dictionary'
const i18n = createI18n({
    messages: dict,
    fallbackFormat: 'en',
    locale: navigator.language.startsWith('es') ? 'es' : 'en',
    legacy: false
})
import router from './router/routes'
createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
