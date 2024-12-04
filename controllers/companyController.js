const erpnextApi = require('../config/erpnextAuth');

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const response = await erpnextApi.get('/api/resource/Company');
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error: error.response?.data || error.message });
  }
};

// Get a single company by ID
exports.getCompany = async (req, res) => {
  try {
    const response = await erpnextApi.get(`/api/resource/Company/${req.params.companyId}`);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching company', error: error.response?.data || error.message });
  }
};

// Create a new company
exports.createCompany = async (req, res) => {
  try {
    const response = await erpnextApi.post('/api/resource/Company', req.body);
    res.status(201).json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company', error: error.response?.data || error.message });
  }
};

// Update a company by ID
exports.updateCompany = async (req, res) => {
  try {
    const response = await erpnextApi.put(`/api/resource/Company/${req.params.companyId}`, req.body);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error updating company', error: error.response?.data || error.message });
  }
};

// Delete a company by ID
exports.deleteCompany = async (req, res) => {
  try {
    const response = await erpnextApi.delete(`/api/resource/Company/${req.params.companyId}`);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting company', error: error.response?.data || error.message });
  }
};
