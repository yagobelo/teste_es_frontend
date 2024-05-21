<script setup>
import { hospedesServices } from "@/services/hospedesServices";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";

const store = useCounterStore();

const { editIdHospede } = storeToRefs(store);

const display = ref("");

const hospede = reactive({});

onMounted(async () => {
  try {
    const resposta = await hospedesServices.buscarHospede(editIdHospede.value);
    const lastHospede = resposta.data;

    lastHospede.data_nascimento = new Date(
      lastHospede.data_nascimento
    ).toLocaleDateString("en-CA");

    hospede.nome = lastHospede.nome;
    hospede.data_nascimento = lastHospede.data_nascimento;
    hospede.telefone = lastHospede.telefone;
    hospede.email = lastHospede.email;
    hospede.rg = lastHospede.rg;
    hospede.pais = lastHospede.pais;
    hospede.estado = lastHospede.estado;
    hospede.cidade = lastHospede.cidade;
    hospede.logradouro = lastHospede.logradouro;
    hospede.numero_endereco = lastHospede.numero_endereco;
    hospede.bairro = lastHospede.bairro;
    hospede.complemento_endereco = lastHospede.complemento_endereco;
  } catch (error) {
    console.log(error.response.data.mensagem);
  }
});

const editar = async () => {
  try {
    const resposta = await hospedesServices.editarHospede(
      editIdHospede.value,
      hospede
    );

    alert(resposta.data.mensagem);
  } catch (error) {
    display.value = error.response.data.mensagem;
  }
};
</script>

<template>
  <div class="bodyCadastrarHospede">
    <h1 class="titulo">EDITAR HOSPEDE</h1>
    <h3 class="containerDisplay" v-if="display">{{ display }}</h3>
    <form class="containerForm" @submit.prevent="editar()">
      <h2>DADOS PESSOAIS</h2>
      <p class="titleInput">Nome</p>
      <input class="inputText" type="text" v-model="hospede.nome" />

      <p class="titleInput">Data de Nascimento</p>
      <input
        class="inputText"
        style="width: 25px"
        type="date"
        v-model="hospede.data_nascimento"
      />

      <p class="titleInput">Telefone</p>
      <input class="inputText" type="tel" v-model="hospede.telefone" />

      <p class="titleInput">E-mail</p>
      <input class="inputText" type="email" v-model="hospede.email" />

      <p class="titleInput">RG</p>
      <input class="inputText" type="text" v-model="hospede.rg" />

      <h2>ENDEREÇO</h2>
      <p class="titleInput">País</p>
      <input class="inputText" type="text" v-model="hospede.pais" />

      <p class="titleInput">Estado</p>
      <input class="inputText" type="text" v-model="hospede.estado" />

      <p class="titleInput">Cidade</p>
      <input class="inputText" type="text" v-model="hospede.cidade" />

      <p class="titleInput">Logradouro</p>
      <input class="inputText" type="text" v-model="hospede.logradouro" />

      <p class="titleInput">Número</p>
      <input class="inputText" type="text" v-model="hospede.numero_endereco" />

      <p class="titleInput">Bairro</p>
      <input class="inputText" type="text" v-model="hospede.bairro" />

      <p class="titleInput">Complemeto</p>
      <input
        class="inputText"
        type="text"
        v-model="hospede.complemento_endereco"
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
