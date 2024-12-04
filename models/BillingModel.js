const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    billId: { type: String, required: true, unique: true },
    patientId: { type: String, required: true, ref: 'Patient' },
    services: [
      {
        description: { type: String, required: true },
        cost: { type: Number, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Paid', 'Cancelled'], default: 'Pending' },
    paymentDate: { type: Date },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Billing', BillingSchema);
  