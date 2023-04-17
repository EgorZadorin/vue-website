import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // Keep only the routes you need
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
