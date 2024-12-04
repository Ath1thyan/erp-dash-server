const erpnextApi = require('../config/erpnextAuth');

// Get all banks
exports.getAllBanks = async (req, res) => {
  try {
    const response = await erpnextApi.get('/api/resource/Bank');
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching banks', error: error.response?.data || error.message });
  }
};

// Get a single bank by ID
exports.getBank = async (req, res) => {
  try {
    const response = await erpnextApi.get(`/api/resource/Bank/${req.params.bankId}`);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bank', error: error.response?.data || error.message });
  }
};

// Create a new bank
exports.createBank = async (req, res) => {
  try {
    const response = await erpnextApi.post('/api/resource/Bank', req.body);
    res.status(201).json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating bank', error: error.response?.data || error.message });
  }
};

// Update a bank by ID
exports.updateBank = async (req, res) => {
  try {
    const response = await erpnextApi.put(`/api/resource/Bank/${req.params.bankId}`, req.body);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error updating bank', error: error.response?.data || error.message });
  }
};

// Delete a bank by ID
exports.deleteBank = async (req, res) => {
  try {
    const response = await erpnextApi.delete(`/api/resource/Bank/${req.params.bankId}`);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting bank', error: error.response?.data || error.message });
  }
};
