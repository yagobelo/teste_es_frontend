<script setup>
import CardHospedes from "@/components/CardHospedes.vue";
</script>

<template>
  <div>
    <button>+</button>
    <div class="containerCards">
      <CardHospedes />
      <CardHospedes />
    </div>
  </div>
</template>

<style>
.containerCards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
