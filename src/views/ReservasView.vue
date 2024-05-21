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
    <RouterLink class="btnNovoCadastroReserva" to="/cadastro-reserva"
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

<style>
.containerBody {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.cards {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
}
.btnNovoCadastroReserva {
  margin: 10px;
  width: 50%;
  height: 50px;
  background: #06d6a0;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.btnNovoCadastroReserva:hover {
  background-color: #06d69ebd;
}
.btnNovoCadastroReserva:active {
  background-color: aliceblue;
}
</style>
