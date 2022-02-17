import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Basket from "@/views/Basket";

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/basket', component: Basket},
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;