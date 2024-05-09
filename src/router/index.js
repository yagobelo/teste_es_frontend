import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/hospedes",
      name: "hospedes",
      component: () => import("@/views/HospedesView.vue"),
    },
    {
      path: "/reservas",
      name: "/reservas",

      component: () => import("@/views/ReservasView.vue"),
    },
  ],
});

export default router;
