<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const props = defineProps(["hospede"]);

const store = useCounterStore();

const { editIdHospede } = storeToRefs(store);

const changeEditHospedeId = () => {
  editIdHospede.value = props.hospede.id;
};
</script>

<template>
  <RouterLink style="text-decoration: none" to="/editar-hospede">
    <button @click="changeEditHospedeId()" class="container">
      <div class="containerData">
        <p style="align-self: flex-end">ID: {{ hospede.id }}</p>
        <div class="containerP">
          <p>Nome: {{ hospede.nome }}</p>
          <p>Nascimento: {{ hospede.dataNascimento }}</p>
          <p>Telefone: {{ hospede.telefone }}</p>
          <p>RG: {{ hospede.rg }}</p>
        </div>
        <div class="containerP">
          <p>País: {{ hospede.pais }}</p>
          <p>Estado: {{ hospede.estado }}</p>
          <p>Cidade: {{ hospede.cidade }}</p>
          <p>Logradouro: {{ hospede.logradouro }}</p>
          <p>Número: {{ hospede.n }}</p>
          <p>Bairro: {{ hospede.bairro }}</p>
          <p>Complemento: {{ hospede.complemento }}</p>
        </div>
      </div>
    </button>
  </RouterLink>
</template>

<style>
.container {
  background: #003049;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  width: 300px;
  height: 250px;
  margin: 10px;
  padding: 0 10px;
}
.containerData {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-evenly;
  width: 100%;
  max-width: 700px;
  height: 100%;
}
.containerP {
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
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  white-space: nowrap;
}
button {
  cursor: pointer;
}
button:hover {
  background-color: #002f49c0;
}
</style>
