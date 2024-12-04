exports.getAllAccounts = async (req, res) => {
    try {
      const response = await erpnextApi.get('/api/resource/Account');
      res.json(response.data.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching accounts', error: error.response.data });
    }
  };
  
  exports.createAccount = async (req, res) => {
    try {
      const newAccount = req.body;
      const response = await erpnextApi.post('/api/resource/Account', newAccount);
      res.status(201).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error creating account', error: error.response.data });
    }
  };
  