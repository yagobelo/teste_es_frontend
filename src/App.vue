<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1 class="titleHeader">HOTEL XY</h1>
    <nav>
      <RouterLink class="textHeader" to="/hospedes">| HOSPEDES |</RouterLink>
      <RouterLink to="/">
        <img src="/logo.png" alt="LogoHotel" />
      </RouterLink>
      <RouterLink class="textHeader" to="/reservas">| RESERVAS |</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  background: #00b4d8;
  border-radius: 10px;
  height: 75px;
  min-width: 240px;
}
.titleHeader {
  font-size: 20px;
  text-align: center;
  margin: 0;
  padding: 5px 0 0 0;
  color: black;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.textHeader {
  color: black;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  padding: 0 10px;
}
.textHeader:hover {
  color: white;
}
img {
  width: 40px;
  height: 40px;
}
</style>
