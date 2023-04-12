import {createApp} from 'vue'
import App from './App.vue' 
import router from './router'; 



 
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes: 
//     [
//         {
//         path: './', 
//         component: Home
//         },
//         {
//             path: './about-p',
//             component: () => import./components/About-p.vuevue')
//         }
//     ]

// })

createApp (App).use (router).mount ('#app')