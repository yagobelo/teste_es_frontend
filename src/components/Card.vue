<script setup>
const props = defineProps(["tituloCard"]);
</script>

<template>
  <button class="containerCard">
    <h3>{{ tituloCard }}</h3>
  </button>
</template>

<style scoped>
.containerCard {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 150px;
  height: 200px;
  background: #9af0ff;
  border-radius: 50px 25px 50px 25px;
  -webkit-border-radius: 50px 25px 50px 25px;
  -moz-border-radius: 50px 25px 50px 25px;
}
</style>
