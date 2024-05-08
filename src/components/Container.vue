<script setup>
import Card from "@/components/Card.vue";

const props = defineProps(["titulo"]);
</script>

<template>
  <div style="background: #003049">
    <h1>{{ titulo }}</h1>
    <div class="container">
      <Card tituloCard="HOSPEDES" />
      <Card tituloCard="RESERVAS" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}
.container {
  background: #003049;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
