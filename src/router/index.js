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
      path: "/cadastro-hospede",
      name: "/cadastro-hospede",
      component: () => import("@/views/CadastroHospede.vue"),
    },
    {
      path: "/editar-hospede",
      name: "/editar-hospede",
      component: () => import("@/views/EditarHospede.vue"),
    },
    {
      path: "/reservas",
      name: "/reservas",
      component: () => import("@/views/ReservasView.vue"),
    },
    {
      path: "/cadastro-reserva",
      name: "/cadastro-reserva",
      component: () => import("@/views/CadastroReserva.vue"),
    },
    {
      path: "/editar-reserva",
      name: "/editar-reserva",
      component: () => import("@/views/EditarReserva.vue"),
    },
  ],
});

export default router;
