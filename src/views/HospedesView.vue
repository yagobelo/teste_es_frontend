<script setup>
import CardHospedes from "@/components/CardHospedes.vue";
import { hospedes } from "@/data.js";
</script>

<template>
  <div class="containerBody">
    <RouterLink class="btnNovoCadastroHospede" to="/cadastro-hospede"
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

<style>
.containerBody {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.cards {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
}
.btnNovoCadastroHospede {
  margin: 10px;
  width: 50%;
  height: 50px;
  background: #06d6a0;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.btnNovoCadastroHospede:hover {
  background-color: #06d69ebd;
}
.btnNovoCadastroHospede:active {
  background-color: aliceblue;
}
.editar {
  position: absolute;
  width: 50%;
  top: 50px;
  left: 0;
}
</style>
