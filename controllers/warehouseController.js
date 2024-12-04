const erpnextApi = require('../config/erpnextAuth');

// Get all warehouses
exports.getAllWarehouses = async (req, res) => {
  try {
    const response = await erpnextApi.get('/api/resource/Warehouse');
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching warehouses', error: error.response?.data || error.message });
  }
};

// Get a single warehouse
exports.getWarehouse = async (req, res) => {
  try {
    const response = await erpnextApi.get(`/api/resource/Warehouse/${req.params.id}`);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching warehouse', error: error.response?.data || error.message });
  }
};

// Create a new warehouse
exports.createWarehouse = async (req, res) => {
  try {
    const response = await erpnextApi.post('/api/resource/Warehouse', req.body);
    res.status(201).json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating warehouse', error: error.response?.data || error.message });
  }
};

// Update an existing warehouse
exports.updateWarehouse = async (req, res) => {
  try {
    const response = await erpnextApi.put(`/api/resource/Warehouse/${req.params.warehouseId}`, req.body);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error updating warehouse', error: error.response?.data || error.message });
  }
};

// Delete a warehouse
exports.deleteWarehouse = async (req, res) => {
  try {
    const response = await erpnextApi.delete(`/api/resource/Warehouse/${req.params.warehouseId}`);
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting warehouse', error: error.response?.data || error.message });
  }
};
