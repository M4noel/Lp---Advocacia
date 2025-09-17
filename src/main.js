import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

// Inicializar Vercel Analytics e Speed Insights
inject()
injectSpeedInsights()

createApp(App).mount('#app')
