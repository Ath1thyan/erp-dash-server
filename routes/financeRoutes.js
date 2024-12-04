const express = require('express');
const router = express.Router();
const { getAllFinances, getFinanceById, addFinance } = require('../controllers/financeController');

router.get('/', getAllFinances);
router.get('/:id', getFinanceById);
router.post('/', addFinance);  // Add new finance record

module.exports = router;
