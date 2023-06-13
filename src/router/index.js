import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import DetailPage from "../components/DetailPage.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about/:id",
    name: "DetailPage",
    component: DetailPage,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;