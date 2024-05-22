<script setup>
import { reservasServices } from "@/services/reservasServices";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";

const store = useCounterStore();

const { editIdReserva } = storeToRefs(store);

const display = ref("");

const reserva = reactive({});

onMounted(async () => {
  try {
    const resposta = await reservasServices.buscarReserva(editIdReserva.value);
    const lastReserva = resposta.data;

    lastReserva.data_checkin = new Date(
      lastReserva.data_checkin
    ).toLocaleDateString("en-CA");
    lastReserva.data_checkout = new Date(
      lastReserva.data_checkout
    ).toLocaleDateString("en-CA");

    reserva.data_checkin = lastReserva.data_checkin;
    reserva.data_checkout = lastReserva.data_checkout;
    reserva.status_reserva = lastReserva.status_reserva;
  } catch (error) {
    console.log(error.response.data.mensagem);
  }
});

const editar = async () => {
  try {
    const resposta = await reservasServices.editarReserva(
      editIdReserva.value,
      reserva
    );

    alert(resposta.data.mensagem);
  } catch (error) {
    display.value = error.response.data.mensagem;
  }
};
</script>

<template>
  <div class="bodyCadastrar">
    <h1 class="titulo">EDITAR RESERVA</h1>
    <form class="containerForm" @submit.prevent="editar()">
      <p class="titleInput">Checkin</p>
      <input class="inputText" type="date" v-model="reserva.data_checkin" />

      <p class="titleInput">Checkout</p>
      <input class="inputText" type="date" v-model="reserva.data_checkout" />

      {{ reserva.data_checkin }}

      <p class="titleInput">Status</p>
      <input class="inputText" type="text" v-model="reserva.status_reserva" />

      <button class="btnSubmit">SALVAR</button>
    </form>
  </div>
</template>

<style>
.containerForm {
  height: 270px;
  padding: 20px 10px 0 10px;
}

.inputText {
  margin-bottom: 20px;
}
.btnSubmit {
  margin: 20px 0;
}
</style>
