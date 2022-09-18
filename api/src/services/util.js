const getRealtiesCount = (enterprises) => {
  return enterprises.reduce((total, enterprise) => {
    return total + Number(enterprise.realties);
  }, 0);
};

module.exports = { getRealtiesCount };
