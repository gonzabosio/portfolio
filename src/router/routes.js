import { createRouter, createWebHistory } from "vue-router";

import AboutMe from "../views/AboutMe.vue";
import Projects from "../views/Projects.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'aboutme',
            component: AboutMe
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        }
    ]
})

export default router