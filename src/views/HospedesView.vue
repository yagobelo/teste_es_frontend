<script setup>
import CardHospedes from "@/components/CardHospedes.vue";
import { ref } from "vue";

import { hospedesServices } from "@/services/hospedesServices";
import { onMounted } from "vue";

const hospedes = ref([]);

onMounted(async () => {
  try {
    const resposta = await hospedesServices.listarHospedes();

    hospedes.value = resposta.data;
  } catch (error) {
    console.log(error.response.data.mensagem);
  }
});
</script>

<template>
  <div class="containerBody">
    <RouterLink class="btnNovoCadastro" to="/cadastro-hospede"
      >CADASTRAR HOSPEDE</RouterLink
    >
    <div class="cards">
      <CardHospedes
        v-for="(item, index) in hospedes"
        :key="index"
        :hospede="item"
      />
    </div>
  </div>
</template>

<style></style>
