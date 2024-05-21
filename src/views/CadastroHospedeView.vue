<script setup>
import { hospedesServices } from "@/services/hospedesServices";
import { reactive, ref } from "vue";

const display = ref("");

const hospede = reactive({});

const cadastrar = async () => {
  try {
    const resposta = await hospedesServices.cadastrarHospede(hospede);

    alert(resposta.data.mensagem);
  } catch (error) {
    display.value = error.response.data.mensagem;
    console.log(error.response.data.mensagem);
  }
};
</script>

<template>
  <div class="bodyCadastrarHospede">
    <h1 class="titulo">CADASTRAR HOSPEDE</h1>
    <h3 class="containerDisplay" v-if="display">{{ display }}</h3>
    <form class="containerForm" @submit.prevent="cadastrar()">
      <h2>DADOS PESSOAIS</h2>
      <input
        class="inputText"
        type="text"
        placeholder="Nome"
        v-model="hospede.nome"
      />
      <input
        class="inputText"
        type="text"
        placeholder="Data de Nascimento"
        v-model="hospede.data_nascimento"
      />
      <input
        class="inputText"
        type="text"
        placeholder="RG"
        v-model="hospede.rg"
      />
      <input
        class="inputText"
        type="text"
        placeholder="Telefone"
        v-model="hospede.telefone"
      />
      <input
        class="inputText"
        type="text"
        placeholder="E-mail"
        v-model="hospede.email"
      />

      <h2>ENDEREÇO</h2>
      <input
        class="inputText"
        type="text"
        placeholder="País"
        v-model="hospede.pais"
      />
      <input
        class="inputText"
        type="text"
        placeholder="Estado"
        v-model="hospede.estado"
      />
      <input
        class="inputText"
        type="text"
        placeholder="Cidade"
        v-model="hospede.cidade"
      />
      <input
        class="inputText"
        type="text"
        placeholder="Logradouro"
        v-model="hospede.logradouro"
      />
      <input
        class="inputText"
        type="text"
        placeholder="Número"
        v-model="hospede.numero_endereco"
      />
      <input
        class="inputText"
        type="text"
        placeholder="Bairro"
        v-model="hospede.bairro"
      />
      <input
        class="inputText"
        type="text"
        placeholder="Complemento"
        v-model="hospede.complemento_endereco"
        s
      />

      <button class="btnSubmit">SALVAR</button>
    </form>
  </div>
</template>

<style>
.bodyCadastrarHospede {
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
  height: 800px;
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
