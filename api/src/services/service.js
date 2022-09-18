const data = require('../../clients.mock');
const util = require('./util');

const getAllClients = () => {
  return data.map((client) => {
    return {
      _id: client._id,
      name: client.name,
      image_src: client.image_src,
      enterprises_count: client.enterprises.length,
      realties_count: util.getRealtiesCount(client.enterprises),
    };
  });
};

const getClientsByName = (name) => {
  const filter = new RegExp(name.toLowerCase());
  let clients = [];
  data.forEach((client) => {
    const clientName = client.name.toLowerCase();
    if (clientName.match(filter))
      clients.push({
        _id: client._id,
        name: client.name,
        image_src: client.image_src,
        enterprises_count: client.enterprises.length,
        realties_count: util.getRealtiesCount(client.enterprises),
      });
  });
  return clients;
};

const getClientById = (id) => {
  const filter = new RegExp(`^${id}$`);
  let clientById;
  data.forEach((client) => {
    const clientId = client._id;

    if (clientId.match(filter))
      clientById = {
        _id: client._id,
        name: client.name,
        image_src: client.image_src,
      };
  });
  return clientById;
};

const getTotals = () => {
  const totals = data.reduce(
    (total, client) => {
      total.enterprises_count += client.enterprises.length;
      total.realties_count += util.getRealtiesCount(client.enterprises);

      return total;
    },
    {
      enterprises_count: 0,
      realties_count: 0,
    }
  );
  return {
    ...totals,
    clients_count: data.length,
  };
};

const getClientTotals = (id) => {
  const filter = new RegExp(`^${id}$`);
  let client_totals;
  data.forEach((client) => {
    if (client._id.match(filter))
      return (client_totals = {
        enterprises_count: client.enterprises.length,
        realties_count: util.getRealtiesCount(client.enterprises),
      });
  });
  return client_totals;
};

const getAllEnterprises = () => {
  const enterprises = [];
  data.forEach((client) => {
    client.enterprises.forEach((enterprise) => {
      enterprises.push({
        _id: enterprise._id,
        name: enterprise.name,
        image_src: enterprise.image_src,
        realties_count: enterprise.realties,
        client_name: client.name,
      });
    });
  });
  return enterprises;
};
const getEnterprisesByName = (name) => {
  const enterprises = [];
  const filter = new RegExp(name.toLowerCase());
  data.forEach((client) => {
    client.enterprises.forEach((enterprise) => {
      const enterpriseName = enterprise.name.toLowerCase();
      if (enterpriseName.match(filter)) {
        enterprises.push({
          _id: enterprise._id,
          name: enterprise.name,
          image_src: enterprise.image_src,
          realties_count: enterprise.realties,
          client_name: client.name,
        });
      }
    });
  });
  return enterprises;
};
const getEnterprisesByClient = (id) => {
  const filter = new RegExp(`^${id}$`);
  let enterprises = [];
  data.forEach((client) => {
    const clientId = client._id;
    if (clientId.match(filter)) {
      client.enterprises.forEach((enterprise) => {
        enterprises.push({
          _id: enterprise._id,
          name: enterprise.name,
          image_src: enterprise.image_src,
        });
      });
    }
  });
  return enterprises;
};

const getEnterprisesByClientAndName = (id, name) => {
  const clientFilter = new RegExp(`^${id}$`);
  const enterpriseFilter = new RegExp(name.toLowerCase());
  let enterprises = [];
  data.forEach((client) => {
    const clientId = client._id;
    if (clientId.match(clientFilter)) {
      client.enterprises.forEach((enterprise) => {
        const enterpriseName = enterprise.name.toLowerCase();
        if (enterpriseName.match(enterpriseFilter))
          return enterprises.push({
            _id: enterprise._id,
            name: enterprise.name,
            image_src: enterprise.image_src,
            realties_count: enterprise.realties,
          });
      });
    }
  });
  return enterprises;
};

module.exports = {
  getAllClients,
  getTotals,
  getClientsByName,
  getClientById,
  getClientTotals,
  getAllEnterprises,
  getEnterprisesByName,
  getEnterprisesByClient,
  getEnterprisesByClientAndName,
};
