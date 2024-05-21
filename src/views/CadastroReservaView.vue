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
  <div class="bodyCadastrarReserva">
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
.bodyCadastrarReserva {
  display: flex;
  flex-direction: column;
}
.titulo {
  align-self: center;
  margin-top: 20px;
}
.containerDisplay {
  align-self: center;
  margin: 0;
  color: #e63946;
  background: #003049;
  padding: 5px 10px;
  border-radius: 10px 10px 0 0;
}
.containerForm {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 300px;
  margin: 0 20px 0 20px;
  background: #003049;
  border-radius: 10px;
  padding: 0 10px 0 10px;
  color: white;
}
.inputText {
  min-width: 200px;
  width: 50%;
  max-width: 500px;
  height: 20px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid #06d6a0;
}
.btnSubmit {
  padding: 5px 10px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  background: #06d6a0;
  width: 200px;
  height: 40px;
}
.btnSubmit:hover {
  background-color: #06d69ebd;
}
</style>
