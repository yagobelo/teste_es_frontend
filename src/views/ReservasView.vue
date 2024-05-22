<script setup>
import CardReservas from "@/components/CardReservas.vue";
import { ref } from "vue";

import { reservasServices } from "@/services/reservasServices";
import { onMounted } from "vue";

const reservas = ref([]);

onMounted(async () => {
  try {
    const resposta = await reservasServices.listarReservas();

    reservas.value = resposta.data;
  } catch (error) {
    console.log(error.response.data.mensagem);
  }
});
</script>

<template>
  <div class="containerBody">
    <RouterLink class="btnNovoCadastro" to="/cadastro-reserva"
      >CADASTRAR RESERVA</RouterLink
    >
    <div class="cards">
      <CardReservas
        v-for="(item, index) in reservas"
        :key="index"
        :reserva="item"
      />
    </div>
  </div>
</template>

<style></style>
