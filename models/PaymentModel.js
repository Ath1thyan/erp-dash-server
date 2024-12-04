const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    paymentId: { type: String, required: true, unique: true },
    billId: { type: String, required: true, ref: 'Billing' },
    amountPaid: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['Cash', 'Credit Card', 'Insurance'], required: true },
    dateOfPayment: { type: Date, default: Date.now },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Payment', PaymentSchema);
  