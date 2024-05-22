import axios from "axios";

const BASE_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

export const estadosServices = {
  async listarEstados() {
    const response = await axios.get(`${BASE_URL}`);

    return response.data;
  },
};
