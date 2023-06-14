import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import DetailPage from "../components/DetailPage.vue";
import NotFound from "../components/NotFound.vue";
import FavoritePage from "../components/FavoritePage.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/detail/:id",
    name: "DetailPage",
    component: DetailPage,
  },
  {
    path: "/favorite",
    name: "FavoritePage",
    component: FavoritePage
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