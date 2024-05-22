<script setup>
import { reservasServices } from "@/services/reservasServices";
import { reactive, ref } from "vue";

const display = ref("");

const reserva = reactive({});

const cadastrar = async () => {
  try {
    const resposta = await reservasServices.cadastrarReserva(reserva);

    alert(resposta.data.mensagem);
  } catch (error) {
    display.value = error.response.data.mensagem;
    console.log(error.response.data.mensagem);
  }
};
</script>

<template>
  <div class="bodyCadastrar">
    <h1 class="titulo">CADASTRAR RESERVA</h1>
    <h3 class="containerDisplay" v-if="display">{{ display }}</h3>
    <form class="containerForm" @submit.prevent="cadastrar()">
      <input
        class="inputText"
        type="text"
        placeholder="RG Hospede"
        v-model="reserva.rg_hospede"
      />

      <div class="divCalendario">
        <p>Data Checkin:</p>
        <input
          class="inputText"
          type="date"
          placeholder="Checkin"
          v-model="reserva.data_checkin"
        />
      </div>
      <div class="divCalendario">
        <p>Data Checkout:</p>
        <input
          class="inputText"
          type="date"
          placeholder="Checkout"
          v-model="reserva.data_checkout"
        />
      </div>
      <input
        class="inputText"
        type="text"
        placeholder="Status"
        v-model="reserva.status_reserva"
      />

      <button class="btnSubmit">SALVAR</button>
    </form>
  </div>
</template>

<style>
.containerForm {
  height: 300px;
}
</style>
