const service = require('../services/service');

const getAllEnterprises = (req, res) => {
  try {
    const enterprises = service.getAllEnterprises();
    return res.send(enterprises).status(200);
  } catch (err) {
    res
      .send({
        error: { message: 'Erro interno do servidor', content: err.toString() },
      })
      .status(500);
  }
};
const getEnterprisesByName = (req, res) => {
  try {
    const { name } = req.params;
    const enterprises = service.getEnterprisesByName(name);
    if (enterprises.length) return res.send(enterprises).status(200);
    return res.send({
      error: { message: 'Não há nenhum empreendimento com esse nome!' },
    });
  } catch (err) {
    res
      .send({
        error: { message: 'Erro interno do servidor', content: err.toString() },
      })
      .status(500);
  }
};
const getEnterprisesByClient = (req, res) => {
  try {
    const { client_id } = req.params;
    const enterprises = service.getEnterprisesByClient(client_id);

    if (enterprises.length) return res.send(enterprises).status(200);
    return res.send({
      error: { message: 'Não há nenhum cliente com esse id!' },
    });
  } catch (err) {
    res
      .send({
        error: { message: 'Erro interno do servidor', content: err.toString() },
      })
      .status(500);
  }
};
const getEnterprisesByClientAndName = (req, res) => {
  try {
    const { client_id, name } = req.params;
    const enterprises = service.getEnterprisesByClientAndName(client_id, name);
    if (enterprises.length) return res.send(enterprises).status(200);
    return res.send({
      error: { message: 'Não há nenhum empreendimento com esse nome e id!' },
    });
  } catch (err) {
    res
      .send({
        error: { message: 'Erro interno do servidor', content: err.toString() },
      })
      .status(500);
  }
};
module.exports = {
  getAllEnterprises,
  getEnterprisesByName,
  getEnterprisesByClient,
  getEnterprisesByClientAndName,
};
