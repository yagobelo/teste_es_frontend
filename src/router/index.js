import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/hospedes",
      name: "hospedes",
      component: () => import("@/views/HospedesView.vue"),
    },
    {
      path: "/cadastro-hospede",
      name: "/cadastro-hospede",
      component: () => import("@/views/CadastroHospedeView.vue"),
    },
    {
      path: "/editar-hospede",
      name: "/editar-hospede",
      component: () => import("@/views/EditarHospedeView.vue"),
    },
    {
      path: "/reservas",
      name: "/reservas",
      component: () => import("@/views/ReservasView.vue"),
    },
    {
      path: "/cadastro-reserva",
      name: "/cadastro-reserva",
      component: () => import("@/views/CadastroReservaView.vue"),
    },
    {
      path: "/editar-reserva",
      name: "/editar-reserva",
      component: () => import("@/views/EditarReservaView.vue"),
    },
  ],
});

export default router;
