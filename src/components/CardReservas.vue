<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const props = defineProps(["reserva"]);

const store = useCounterStore();

const { editIdReserva } = storeToRefs(store);

const changeEditReservaId = () => {
  editIdReserva.value = props.reserva.id;
};
</script>

<template>
  <RouterLink style="text-decoration: none" to="/editar-reserva">
    <button @click="changeEditReservaId()" class="containerReserva">
      <div class="containerDataReserva">
        <p style="align-self: flex-end">ID: {{ reserva.id }}</p>
        <div class="containerPReserva">
          <h3>Reserva</h3>
          <p>RG: {{ reserva.rg_hospede }}</p>
          <p>Checkin: {{ reserva.data_checkin }}</p>
          <p>Checkout: {{ reserva.data_checkout }}</p>
          <p>Status: {{ reserva.status_reserva }}</p>
          <p>Data da Reserva: {{ reserva.create_at }}</p>

          <h3>Hospede</h3>
          <p>Nome: {{ reserva.nome }}</p>
          <p>Data de Nascimento: {{ reserva.data_nascimento }}</p>
          <p>Telefone: {{ reserva.telefone }}</p>
          <p>E-mail: {{ reserva.email }}</p>
          <p>Estado: {{ reserva.estado }}</p>
          <p>Cidade: {{ reserva.cidade }}</p>
          <p>Logradouro: {{ reserva.logradouro }}</p>
          <p>Número: {{ reserva.numero_endereco }}</p>
          <p>Bairro: {{ reserva.bairro }}</p>
          <p>Complemento: {{ reserva.complemento_endereco }}</p>
        </div>
      </div>
    </button>
  </RouterLink>
</template>

<style>
.containerReserva {
  background: #003049;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  width: 300px;
  margin: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
.containerDataReserva {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-evenly;
  width: 100%;
  max-width: 700px;
  height: 100%;
}
.containerPReserva {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  overflow: hidden;
}
p {
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: white;
  font-weight: normal;
  white-space: nowrap;
}
h3 {
  color: white;
}
.containerReserva:hover {
  background-color: #002f49c0;
}
</style>
