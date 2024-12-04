const express = require('express');
const {
  getAllBankAccounts,
  getBankAccount,
  createBankAccount,
  updateBankAccount,
  deleteBankAccount
} = require('../controllers/bankAccountController');

const router = express.Router();

router.get('/', getAllBankAccounts);               // Get all bank accounts
router.get('/:accountId', getBankAccount);         // Get a single bank account by ID
router.post('/', createBankAccount);               // Create a new bank account
router.put('/:accountId', updateBankAccount);      // Update a bank account by ID
router.delete('/:accountId', deleteBankAccount);   // Delete a bank account by ID

module.exports = router;
