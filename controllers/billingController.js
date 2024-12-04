const Billing = require('../models/BillingModel');

// Get all bills
exports.getAllBills = async (req, res) => {
  try {
    const bills = await Billing.find();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bills", error });
  }
};

// Get bill by ID
exports.getBillById = async (req, res) => {
  try {
    const bill = await Billing.findById(req.params.id);
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.status(200).json(bill);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bill", error });
  }
};

// Add new bill
exports.addBill = async (req, res) => {
  try {
    const newBill = new Billing(req.body);
    const savedBill = await newBill.save();
    res.status(201).json(savedBill);
  } catch (error) {
    res.status(500).json({ message: "Error adding bill", error });
  }
};