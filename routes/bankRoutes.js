const express = require('express');
const {
  getAllBanks,
  getBank,
  createBank,
  updateBank,
  deleteBank
} = require('../controllers/bankController');

const router = express.Router();

router.get('/', getAllBanks);             // Get all banks
router.get('/:bankId', getBank);          // Get a single bank by ID
router.post('/', createBank);             // Create a new bank
router.put('/:bankId', updateBank);       // Update a bank by ID
router.delete('/:bankId', deleteBank);    // Delete a bank by ID

module.exports = router;
