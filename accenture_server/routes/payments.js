const paymentsRoutes = (app, fs) => {
  // variables
  const dataPath = './data/payments.json';

  // READ
  app.get('/payments', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = paymentsRoutes;