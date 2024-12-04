const erpnextApi = require('../config/erpnextAuth');

exports.getAllUsers = async (req, res) => {
  try {
    const response = await erpnextApi.get('/api/resource/User');
    res.json(response.data.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// getUser controller function
exports.getUser = async (req, res) => {
  try {
      // Ensure the endpoint path is accurate for ERPNext
      const response = await erpnextApi.get(`/api/resource/User/${req.params.userId}`);
      res.json(response.data.data); // Ensure we access the 'data' property correctly
  }
  catch (error) {
      res.status(500).json({ message: 'Error fetching user', error });
  }
};


exports.createUser = async (req, res) => {
  try {
    const response = await erpnextApi.post('/api/resource/User', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await erpnextApi.put(`/api/resource/User/${userId}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await erpnextApi.delete(`/api/resource/User/${userId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
