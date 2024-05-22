<script setup></script>

<template>
  <div class="containerHome">
    <h1 class="titulo">Home</h1>
    <section>
      <span
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        nostrum officiis saepe culpa ab quo? Rem possimus eius vero eaque
        voluptatum. Perspiciatis quas nam sunt eveniet labore deleniti fugit
        cum.</span
      >
      <img
        class="ilustracoes"
        src="../assets/images/piscinaHome.jpg"
        alt="piscinaHome.jpg"
      />
    </section>
    <section>
      <img
        class="ilustracoes"
        src="../assets/images/quartoHome.jpg"
        alt="piscinaHome.jpg"
      />
      <span
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        nostrum officiis saepe culpa ab quo? Rem possimus eius vero eaque
        voluptatum. Perspiciatis quas nam sunt eveniet labore deleniti fugit
        cum.</span
      >
    </section>
    <footer>
      <a href="https://github.com/yagobelo"
        ><img src="../assets/images/githubLogo.png" alt="Perfil Do GitHub"
      /></a>
    </footer>
  </div>
</template>

<style>
.containerHome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.ilustracoes {
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin: 5px;
}
section {
  display: flex;
  margin: 10px;
  max-width: 70%;
  background: #14213d;
  border-radius: 10px;
}
img {
  width: 50px;
  height: 50px;
}
span {
  font-size: 20px;
  padding: 20px;
  color: white;
}
</style>
