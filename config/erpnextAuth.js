require('dotenv').config(); // Load .env file
const axios = require('axios');

const erpnextApi = axios.create({
  baseURL: process.env.ERP_API_URL,
  auth: {
    username: process.env.ERP_API_KEY,
    password: process.env.ERP_API_SECRET,
  },
});

module.exports = erpnextApi;
