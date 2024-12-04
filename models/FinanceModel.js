const mongoose = require('mongoose');

const FinanceSchema = new mongoose.Schema({
    financeId: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    totalRevenue: { type: Number, required: true },
    expenses: [
      {
        description: { type: String },
        amount: { type: Number, required: true },
        date: { type: Date, default: Date.now },
      },
    ],
    profitOrLoss: { type: Number },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Finance', FinanceSchema);
  