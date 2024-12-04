const express = require('express');
const router = express.Router();
const { getAllBills, getBillById, addBill } = require('../controllers/billingController');

router.get('/', getAllBills);
router.get('/:id', getBillById);
router.post('/', addBill);  // Add new bill

module.exports = router;
