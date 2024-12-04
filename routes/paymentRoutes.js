const express = require('express');
const router = express.Router();
const { getAllPayments, getPaymentById, addPayment } = require('../controllers/paymentController');

router.get('/', getAllPayments);
router.get('/:id', getPaymentById);
router.post('/', addPayment);  // Add new payment

module.exports = router;
