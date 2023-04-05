import App from './App.vue';
import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from 'vue-router'

import Layout from './components/Layout.vue'
import AdminLayout from './components/admin/Layout.vue'
import Index from './components/Index.vue'
import MenuList from './components/menu/List.vue'
import MenuDetail from './components/menu/Detail.vue'
import About from './components/About.vue'


const routes = [
    { path: '/', component: Layout, children:[
        {path: 'index', component: Index},
        {path: 'menu/list', component: MenuList},
        {path: 'menu/detail', component: MenuDetail},
        {path: 'about', component: About}
    ]},
    { path: '/admin/index', component: AdminLayout},
]
  

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


createApp(App)
.use(router)
.mount("#app")