import About from "@/pages/About.vue";
import Main from "@/pages/Main.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import PostPage from "@/pages/PostPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import PostPageCompositionAPI from "@/pages/PostPageCompositionAPI.vue";

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/post-page',
        component: PostPage,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/post-page/:id',
        component: PostIdPage,
    },
    {
        path: '/store',
        component: PostPageWithStore,
    },
    {
        path: '/composition',
        component: PostPageCompositionAPI,
    },

]

const router = createRouter({
    routes,
    history:  createWebHistory(process.env.BASE_URL)
})

export default router;