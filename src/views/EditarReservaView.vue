<script setup>
import { useRouter } from "vue-router";
import { reservasServices } from "@/services/reservasServices";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";

const router = useRouter();

const store = useCounterStore();

const { editIdReserva } = storeToRefs(store);

const display = ref("");
const checkinDigitado = ref(true);

const reserva = reactive({});

onMounted(async () => {
  try {
    const resposta = await reservasServices.buscarReserva(editIdReserva.value);
    const lastReserva = resposta.data;

    reserva.rg_hospede = lastReserva.rg_hospede;
    reserva.data_checkin = lastReserva.data_checkin;
    reserva.data_checkout = lastReserva.data_checkout;
    reserva.status_reserva = lastReserva.status_reserva;
  } catch (error) {
    console.log(error.response.data.mensagem);
  }
});

const editar = async () => {
  try {
    if (reserva.data_checkout < reserva.data_checkin) {
      return (display.value =
        "Data do checkout não pode ser menor que a data do checkin.");
    }

    const resposta = await reservasServices.editarReserva(
      editIdReserva.value,
      reserva
    );

    alert(resposta.data.mensagem);
    router.push({ path: "/reservas" });
  } catch (error) {
    display.value = error.response.data.mensagem;
  }
};
</script>

<template>
  <div class="bodyCadastrar">
    <h1 class="titulo">EDITAR RESERVA</h1>
    <h3 class="containerDisplay" v-if="display">{{ display }}</h3>
    <form class="containerForm" @submit.prevent="editar()">
      <p class="titleInput">RG Hospede:</p>
      <input class="inputText" type="text" v-model="reserva.rg_hospede" />

      <p class="titleInput">Checkin</p>
      <input class="inputText" type="date" v-model="reserva.data_checkin" />

      <p class="titleInput">Checkout</p>
      <input
        class="inputText"
        type="date"
        v-model="reserva.data_checkout"
        :min="reserva.data_checkin"
      />

      <p class="titleInput">Status:</p>
      <select class="inputText" v-model="reserva.status_reserva">
        <option value="PERMITIDO">PERMITIDO</option>
        <option value="NEGADO">NEGADO</option>
        <option value="REVOGADO">REVOGADO</option>
      </select>

      <button class="btnSubmit">SALVAR</button>
    </form>
  </div>
</template>

<style>
.containerForm {
  height: auto;
  padding: 20px 10px 0 10px;
}

.inputText {
  margin-bottom: 30px;
  width: 25px;
}
.btnSubmit {
  margin: 20px 0;
}
</style>
