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
    {
        path : '/admin/thanh-vien',
        component: ()=>import('../components/ThanhVien/index.vue')
    },
    {
        path : '/admin/tac-gia',
        component: ()=>import('../components/TacGia/index.vue')
    },
    {
        path : '/admin/the-loai',
        component: ()=>import('../components/TheLoai/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router