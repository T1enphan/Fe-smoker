import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../layout/wrapper/index.vue')
    },
    {
        path : '/admin/chuyen-muc',
        component: ()=>import('../components/ChuyenMuc/index.vue')
    },
    {
        path : '/admin/sach',
        component: ()=>import('../components/Sach/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router