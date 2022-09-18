const clientController = require('./controllers/clientController');
const enterpriseController = require('./controllers/enterpriseController');

module.exports.load = (app) => {
  app.get('/', clientController.getAllClients);
  app.get('/name/:name', clientController.getClientsByName);
  app.get('/:client_id/totals', clientController.getClientTotals);
  app.get('/enterprise', enterpriseController.getAllEnterprises);
  app.get('/enterprise/name/:name', enterpriseController.getEnterprisesByName);
  app.get(
    '/:client_id/enterprise',
    enterpriseController.getEnterprisesByClient
  );
  app.get(
    '/:client_id/enterprise/name/:name',
    enterpriseController.getEnterprisesByClientAndName
  );
  app.get('/totals', clientController.getTotals);
  app.get('/:_id', clientController.getClientById);
};
