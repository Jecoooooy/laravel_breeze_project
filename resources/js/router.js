import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Portfolio from "./pages/Portfolio.vue";
import Admin from "./pages/Admin.vue";





const routes = [
    { 
        path: "/dashboard",
        name:'Home',
        component: Home
    },
    { 
        path: "/portfolio",
        name:'Portfolio',
        component: Portfolio
    },
    { 
        path: "/admin",
        name:'Admin',
        component: Admin
    },
];




export default createRouter({
    history: createWebHistory(),
    routes,
});