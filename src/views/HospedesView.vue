<script setup>
import CardHospedes from "@/components/CardHospedes.vue";
</script>

<template>
  <div class="containerBody">
    <RouterLink class="btnNovoCadastroHospede" to="/cadastro-hospede"
      >CADASTRAR HOSPEDE</RouterLink
    >
    <div>
      <CardHospedes />
      <CardHospedes />
    </div>
  </div>
</template>

<style>
.containerBody {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
</style>
