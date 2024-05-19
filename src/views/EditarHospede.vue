<script setup>
// import { useCounterStore } from "@/stores/counter";
// import { storeToRefs } from "pinia";

// const store = useCounterStore();

// const { editIdHospede } = storeToRefs(store);

const data1 = {
  id: "4",
  nome: "Yago Belo",
  dataNascimento: "15/02/2000",
  telefone: "993115559",
  email: "yago@email.com",
  rg: "12345678989",
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
  <div class="bodyCadastrarHospede">
    <h1 class="titulo">EDITAR HOSPEDE</h1>
    <form class="containerForm" action="submit">
      <h2>DADOS PESSOAIS</h2>
      <p class="titleInput">Nome</p>
      <input class="inputText" type="text" :placeholder="data1.nome" />

      <p class="titleInput">Data de Nascimento</p>
      <input
        class="inputText"
        type="text"
        :placeholder="data1.dataNascimento"
      />

      <p class="titleInput">Telefone</p>
      <input class="inputText" type="text" :placeholder="data1.telefone" />

      <p class="titleInput">E-mail</p>
      <input class="inputText" type="text" :placeholder="data1.email" />

      <p class="titleInput">RG</p>
      <input class="inputText" type="text" :placeholder="data1.rg" />

      <h2>ENDEREÇO</h2>
      <p class="titleInput">País</p>
      <input class="inputText" type="text" :placeholder="data1.pais" />

      <p class="titleInput">Estado</p>
      <input class="inputText" type="text" :placeholder="data1.estado" />

      <p class="titleInput">Cidade</p>
      <input class="inputText" type="text" :placeholder="data1.cidade" />

      <p class="titleInput">Logradouro</p>
      <input class="inputText" type="text" :placeholder="data1.logradouro" />

      <p class="titleInput">Número</p>
      <input class="inputText" type="text" :placeholder="data1.n" />

      <p class="titleInput">Bairro</p>
      <input class="inputText" type="text" :placeholder="data1.bairro" />

      <p class="titleInput">Complemeto</p>
      <input class="inputText" type="text" :placeholder="data1.complemento" />

      <button class="btnSubmit" type="submit">SALVAR</button>
    </form>
  </div>
</template>

<style>
.bodyCadastrarHospede {
  display: flex;
  flex-direction: column;
}
.titulo {
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  margin-top: 20px;
}
.containerForm {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 800px;
  margin: 0 20px 0 20px;
  background: #003049;
  border-radius: 10px;
  padding: 0 10px 0 10px;
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
  margin-bottom: 5px;
}
.btnSubmit {
  padding: 5px 10px;
  border-radius: 25px;
  font-family: Arial, Helvetica, sans-serif;
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
