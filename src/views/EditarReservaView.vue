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
  <div class="bodyCadastrarReserva">
    <h1 class="titulo">EDITAR RESERVA</h1>
    <form class="containerForm" @submit.prevent="editar()">
      <p class="titleInput">Checkin</p>
      <input class="inputText" type="text" v-model="reserva.data_checkin" />

      <p class="titleInput">Checkout</p>
      <input class="inputText" type="text" v-model="reserva.data_checkout" />

      <p class="titleInput">Status</p>
      <input class="inputText" type="text" v-model="reserva.status_reserva" />

      <button class="btnSubmit">SALVAR</button>
    </form>
  </div>
</template>

<style>
.bodyCadastrarReserva {
  display: flex;
  flex-direction: column;
}
.titulo {
  align-self: center;
  margin-top: 20px;
}
.containerForm {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 270px;
  margin: 0 20px 0 20px;
  background: #003049;
  border-radius: 10px;
  padding: 20px 10px 0 10px;
  color: white;
}
.titleInput {
  background: #00b4d8;
  color: #003049;
  width: 170px;
  text-align: center;
  height: 20px;
  border-radius: 20px 20px 0 0;
  font-size: 15px;
}
.inputText {
  min-width: 200px;
  width: 50%;
  max-width: 500px;
  height: 20px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid #06d6a0;
  margin-bottom: 20px;
}
.btnSubmit {
  padding: 5px 10px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  background: #06d6a0;
  width: 200px;
  height: 40px;
  margin: 20px 0;
}
.btnSubmit:hover {
  background-color: #06d69ebd;
}
</style>
