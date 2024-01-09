import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import checkLogin from "./checkLogin";
const routes = [
    {
        path: "/auth",
        component: () => import("../components/Auth/index.vue"),
    },

    //Login
    {
        path: "/login",
        component: () => import("../components/Login/index.vue"),
        meta: { layout: "new" },
    },

    {
        path: '/',
        component: () => import('../layout/wrapper/index.vue')
    },
    {
        path: '/admin/chuyen-muc',
        component: () => import('../components/ChuyenMuc/index.vue'),
        beforeEnter: checkLogin,
    },
    {
        path: '/admin/sach',
        component: () => import('../components/Sach/index.vue'),
        beforeEnter: checkLogin,
    },
    {
        path: '/admin/thanh-vien',
        component: () => import('../components/ThanhVien/index.vue'),
        beforeEnter: checkLogin,
    },
    {
        path: '/admin/admin',
        component: () => import('../components/Admin/index.vue'),
    },
    {
        path: '/admin/tac-gia',
        component: () => import('../components/TacGia/index.vue'),
        beforeEnter: checkLogin,
    },
    {
        path: '/admin/the-loai',
        component: () => import('../components/TheLoai/index.vue'),
        beforeEnter: checkLogin,
    },
    {
        path: '/admin/nha-cung-cap',
        component: () => import('../components/Nhacungcap/index.vue'),
        beforeEnter: checkLogin,
    },
    {
        path: '/admin/khoa',
        component: () => import('../components/Khoa/index.vue'),
        beforeEnter: checkLogin,
    },
    {
        path: '/admin/chi-tiet-sach',
        component: () => import('../components/ChiTietSach/index.vue'),
    },
    {
        path: '/admin/thue-sach',
        component: () => import('../components/MuonSach/index.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router