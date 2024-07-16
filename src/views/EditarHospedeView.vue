<script setup>
import { useRouter } from "vue-router";
import { hospedesServices } from "@/services/hospedesServices";
import { estadosServices } from "@/services/estadosServices";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";
import { vMaska } from "maska/vue";

const router = useRouter();

const store = useCounterStore();

const { editIdHospede } = storeToRefs(store);

const display = ref("");

const hospede = reactive({});
const estadosEditar = reactive([]);

onMounted(async () => {
  try {
    const resposta = await hospedesServices.buscarHospede(editIdHospede.value);
    const respostaEstados = await estadosServices.listarEstados();

    estadosEditar.push(respostaEstados);
    const lastHospede = resposta.data;

    hospede.nome = lastHospede.nome;
    hospede.data_nascimento = lastHospede.data_nascimento;
    hospede.telefone = lastHospede.telefone;
    hospede.email = lastHospede.email;
    hospede.rg = lastHospede.rg;
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
    router.push({ path: "/hospedes" });
  } catch (error) {
    display.value = error.response.data.mensagem;
  }
};
</script>

<template>
  <div class="bodyCadastrar">
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
      <input
        class="inputText"
        type="tel"
        v-model="hospede.telefone"
        v-maska="'(##) #####-####'"
      />

      <p class="titleInput">E-mail</p>
      <input class="inputText" type="email" v-model="hospede.email" />

      <p class="titleInput">RG</p>
      <input class="inputText" type="text" v-model="hospede.rg" />

      <h2>ENDEREÇO</h2>

      <p class="titleInput">Estado</p>
      <select class="inputText" style="width: 25px" v-model="hospede.estado">
        <option
          v-for="(estado, index) in estadosEditar[0]"
          :key="index.id"
          :value="estado.nome"
        >
          {{ estado.nome }}
        </option>
      </select>

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
.containerForm {
  height: 800px;
}
.inputText {
  margin-bottom: 5px;
}
.btnSubmit {
  margin: 20px 0;
}
</style>
