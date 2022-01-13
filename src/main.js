import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import router from "./routes"
import "./assets/tailwind/index.css";

createApp(App).use(router).mount('#app')
