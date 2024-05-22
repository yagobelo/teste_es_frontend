<script setup>
import { useRouter } from "vue-router";
import { hospedesServices } from "@/services/hospedesServices";
import { reactive, ref } from "vue";

const router = useRouter();

const display = ref("");

const hospede = reactive({});

const cadastrar = async () => {
  try {
    if (hospede.data_nascimento == "Invalid Date") {
      return (display.value = "Formato de data de nascimento invalida.");
    }

    const resposta = await hospedesServices.cadastrarHospede(hospede);

    alert(resposta.data.mensagem);
    router.push({ path: "/hospedes" });
  } catch (error) {
    display.value = error.response.data.mensagem;
    console.log(error.response.data.mensagem);
  }
};
</script>

<template>
  <div class="bodyCadastrar">
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
      <div class="divCalendario">
        <p>Data de Nascimento:</p>
        <input
          class="inputText"
          type="date"
          v-model="hospede.data_nascimento"
        />
      </div>
      <input
        class="inputText"
        type="text"
        placeholder="RG"
        v-model="hospede.rg"
      />
      <input
        class="inputText"
        type="tel"
        placeholder="Telefone"
        v-model="hospede.telefone"
      />
      <input
        class="inputText"
        type="email"
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
.containerForm {
  height: 800px;
}
</style>
