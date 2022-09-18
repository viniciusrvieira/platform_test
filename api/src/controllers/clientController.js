const service = require('../services/service');

const getAllClients = (req, res) => {
  try {
    const clients = service.getAllClients();
    res.send(clients).status(200);
  } catch (err) {
    res
      .send({
        error: { message: 'Erro interno do servidor', content: err.toString() },
      })
      .status(500);
  }
};

const getClientsByName = (req, res) => {
  try {
    const { name } = req.params;
    const clients = service.getClientsByName(name);
    if (clients.length) return res.send(clients).status(200);
    res
      .send({ error: { message: 'Não há nenhum cliente com esse nome!' } })
      .status(404);
  } catch (err) {
    res
      .send({
        error: { message: 'Erro interno do servidor', content: err.toString() },
      })
      .status(500);
  }
};
const getClientById = (req, res) => {
  try {
    const { _id } = req.params;
    const client = service.getClientById(_id);
    if (client) return res.send(client).status(200);
    res
      .send({ error: { message: 'Não há nenhum cliente com esse id!' } })
      .status(404);
  } catch (err) {
    res
      .send({
        error: { message: 'Erro interno do servidor', content: err.toString() },
      })
      .status(500);
  }
};
const getClientTotals = (req, res) => {
  try {
    const { client_id } = req.params;
    const clientTotals = service.getClientTotals(client_id);
    if (clientTotals) return res.send(clientTotals).status(200);
    res
      .send({ error: { message: 'Não há nenhum cliente com esse id!' } })
      .status(404);
  } catch (err) {
    res
      .send({
        error: { message: 'Erro interno do servidor', content: err.toString() },
      })
      .status(500);
  }
};
const getTotals = (req, res) => {
  try {
    const totals = service.getTotals();
    res.send(totals).status(200);
  } catch (err) {
    res
      .send({
        error: { message: 'Erro interno do servidor', content: err.toString() },
      })
      .status(500);
  }
};
module.exports = {
  getAllClients,
  getClientsByName,
  getClientTotals,
  getClientById,
  getTotals,
};
