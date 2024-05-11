<script setup>
const data = {
  id: "1",
  nome: "Yago Belo",
  dataNascimento: "15/02/2000",
  telefone: "993115559",
  email: "yago@email.com",
  cpf: "12345678989",
  pais: "Brasil",
  estado: "Alagoas",
  cidade: "Maceio",
  logradouro: "Rua Brasil Alagoas",
  n: "10",
  bairro: "Centro",
  complemento: "",
};
</script>

<template>
  <RouterLink style="text-decoration: none" to="/editar-hospede">
    <button class="container">
      <div class="containerData">
        <p style="align-self: flex-end">ID: {{ data.id }}</p>
        <div class="containerP">
          <p>Nome: {{ data.nome }}</p>
          <p>Nascimento: {{ data.dataNascimento }}</p>
          <p>Telefone: {{ data.telefone }}</p>
          <p>CPF: {{ data.cpf }}</p>
        </div>
        <div class="containerP">
          <p>País: {{ data.pais }}</p>
          <p>Estado: {{ data.estado }}</p>
          <p>Cidade: {{ data.cidade }}</p>
          <p>Logradouro: {{ data.logradouro }}</p>
          <p>Número: {{ data.n }}</p>
          <p>Bairro: {{ data.bairro }}</p>
          <p>Complemento: {{ data.complemento }}</p>
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
button:active {
  background-color: aliceblue;
}
</style>
