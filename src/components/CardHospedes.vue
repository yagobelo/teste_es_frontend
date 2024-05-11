<script setup>
const data = {
  id: "1",
  nome: "Yago Belo",
  dataNascimento: "15/02/2000",
  contatos: "993115559",
  email: "yago@email.com",
  tipoDocumento: "CPF",
  nDocumento: "12345678989",
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
        <h3>Nome: {{ data.nome }}</h3>
        <div style="display: flex; justify-content: space-between">
          <h3>Data de Nascimento: {{ data.dataNascimento }}</h3>
          <p>ID: {{ data.id }}</p>
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
  max-width: 700px;
  width: 100%;
  min-width: 300px;
  height: 50px;
  margin: 10px;
  padding: 0 20px;
  overflow: hidden;
}
.containerData {
  display: flex;
  flex-direction: column;
  width: 100%;
}
h3 {
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  align-self: baseline;
  white-space: nowrap;
}
p {
  font-size: 15px;
  margin: 0;
  padding: 0;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
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
