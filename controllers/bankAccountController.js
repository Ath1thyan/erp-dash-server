const erpnextApi = require('../config/erpnextAuth');

// Get all bank accounts
exports.getAllBankAccounts = async (req, res) => {
  try {
    const response = await erpnextApi.get('/api/resource/Bank Account');
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bank accounts', error: error.response?.data || error.message });
  }
};

// Get a single bank account by ID
exports.getBankAccount = async (req, res) => {
  try {
    const response = await erpnextApi.get(`/api/resource/Bank Account/${req.params.accountId}`);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bank account', error: error.response?.data || error.message });
  }
};

// Create a new bank account
exports.createBankAccount = async (req, res) => {
  try {
    const response = await erpnextApi.post('/api/resource/Bank Account', req.body);
    res.status(201).json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating bank account', error: error.response?.data || error.message });
  }
};

// Update a bank account by ID
exports.updateBankAccount = async (req, res) => {
  try {
    const response = await erpnextApi.put(`/api/resource/Bank Account/${req.params.accountId}`, req.body);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error updating bank account', error: error.response?.data || error.message });
  }
};

// Delete a bank account by ID
exports.deleteBankAccount = async (req, res) => {
  try {
    const response = await erpnextApi.delete(`/api/resource/Bank Account/${req.params.accountId}`);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting bank account', error: error.response?.data || error.message });
  }
};
