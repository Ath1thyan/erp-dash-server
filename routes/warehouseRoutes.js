const express = require('express');
const {
  getAllWarehouses,
  getWarehouse,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse
} = require('../controllers/warehouseController');

const router = express.Router();

// Routes for warehouse CRUD operations
router.get('/', getAllWarehouses);            // Get all warehouses
router.get('/:id', getWarehouse);             // Get a single warehouse by ID
router.post('/', createWarehouse);            // Create a new warehouse
router.put('/:warehouseId', updateWarehouse); // Update a warehouse by ID
router.delete('/:warehouseId', deleteWarehouse); // Delete a warehouse by ID

module.exports = router;
