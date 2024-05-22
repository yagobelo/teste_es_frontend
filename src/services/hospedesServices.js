import axios from "axios";

const BASE_URL = "http://localhost:3000/hospedes";

export const hospedesServices = {
  async cadastrarHospede(hospede) {
    const response = await axios.post(`${BASE_URL}/cadastro`, {
      nome: hospede.nome,
      data_nascimento: hospede.data_nascimento,
      telefone: hospede.telefone,
      email: hospede.email,
      rg: hospede.rg,
      estado: hospede.estado,
      cidade: hospede.cidade,
      logradouro: hospede.logradouro,
      numero_endereco: hospede.numero_endereco,
      bairro: hospede.bairro,
      complemento_endereco: hospede.complemento_endereco,
    });
    return response;
  },
  async listarHospedes() {
    const response = await axios.get(`${BASE_URL}/listar`);

    return response;
  },
  async buscarHospede(id) {
    const response = await axios.get(`${BASE_URL}/buscar/${id}`);

    return response;
  },
  async editarHospede(id, hospede) {
    const response = await axios.put(`${BASE_URL}/editar/${id}`, {
      nome: hospede.nome,
      data_nascimento: hospede.data_nascimento,
      telefone: hospede.telefone,
      email: hospede.email,
      rg: hospede.rg,
      estado: hospede.estado,
      cidade: hospede.cidade,
      logradouro: hospede.logradouro,
      numero_endereco: hospede.numero_endereco,
      bairro: hospede.bairro,
      complemento_endereco: hospede.complemento_endereco,
    });

    return response;
  },
};
