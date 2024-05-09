<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink class="textHeader" to="/hospedes">HOSPEDES</RouterLink>
        <RouterLink class="textHeader" to="/reservas">ABOUT</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.textHeader {
  color: black;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
}
</style>
