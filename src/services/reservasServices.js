import axios from "axios";

const BASE_URL = "http://localhost:3000/reservas";

export const reservasServices = {
  async cadastrarReserva(reserva) {
    const response = await axios.post(`${BASE_URL}/cadastro`, {
      rg_hospede: reserva.rg_hospede,
      data_checkin: reserva.data_checkin,
      data_checkout: reserva.data_checkout,
      status_reserva: reserva.status_reserva,
    });
    return response;
  },
  async listarReservas() {
    const response = await axios.get(`${BASE_URL}/listar`);

    return response;
  },
  async buscarReserva(id) {
    const response = await axios.get(`${BASE_URL}/buscar/${id}`);

    return response;
  },
  async editarReserva(id, reserva) {
    const response = await axios.put(`${BASE_URL}/editar/${id}`, {
      data_checkin: reserva.data_checkin,
      data_checkout: reserva.data_checkout,
      status_reserva: reserva.status_reserva,
    });

    return response;
  },
};
