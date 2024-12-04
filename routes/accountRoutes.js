const express = require('express');
const { getAllAccounts, createAccount } = require('../controllers/accountController');
const router = express.Router();

router.get('/', getAllAccounts);
router.post('/', createAccount);

module.exports = router;
