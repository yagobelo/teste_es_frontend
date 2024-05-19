<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink class="textHeader" to="/hospedes">HOSPEDES</RouterLink>
      <RouterLink class="textHeader" to="/reservas">RESERVAS</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  background: #00b4d8;
  border-radius: 10px;
  height: 50px;
  min-width: 240px;
}
nav {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.textHeader {
  color: black;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
}
.textHeader:hover {
  color: white;
}
</style>
