<script setup></script>

<template>
  <div class="bodyCadastrarHospede">
    <h1 class="titulo">EDITAR HOSPEDE</h1>
    <form class="containerForm" action="submit">
      <h2>DADOS PESSOAIS</h2>
      <input class="inputText" type="text" placeholder="hospede.nome" />
      <input class="inputText" type="text" placeholder="Data de Nascimento" />
      <input class="inputText" type="text" placeholder="CPF" />
      <input class="inputText" type="text" placeholder="Telefone" />
      <input class="inputText" type="text" placeholder="E-mail" />

      <h2>ENDEREÇO</h2>
      <input class="inputText" type="text" placeholder="País" />
      <input class="inputText" type="text" placeholder="Estado" />
      <input class="inputText" type="text" placeholder="Cidade" />
      <input class="inputText" type="text" placeholder="Logradouro" />
      <input class="inputText" type="text" placeholder="Número" />
      <input class="inputText" type="text" placeholder="Bairro" />
      <input class="inputText" type="text" placeholder="Complemento" />

      <button class="btnSubmit" type="submit">SALVAR</button>
    </form>
  </div>
</template>

<style>
.bodyCadastrarHospede {
  display: flex;
  flex-direction: column;
}
.titulo {
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  margin-top: 20px;
}
.containerForm {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 800px;
  margin: 0 20px 0 20px;
  background: #003049;
  border-radius: 10px;
  padding: 0 10px 0 10px;
  color: white;
}
.inputText {
  min-width: 200px;
  width: 50%;
  max-width: 500px;
  height: 20px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid #06d6a0;
}
.btnSubmit {
  padding: 5px 10px;
  border-radius: 25px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15px;
  background: #06d6a0;
  width: 200px;
  height: 40px;
}
.btnSubmit:hover {
  background-color: #06d69ebd;
}
</style>
