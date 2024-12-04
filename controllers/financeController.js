const Finance = require('../models/FinanceModel');

// Get all finance records
exports.getAllFinances = async (req, res) => {
  try {
    const finances = await Finance.find();
    res.status(200).json(finances);
  } catch (error) {
    res.status(500).json({ message: "Error fetching finances", error });
  }
};

// Get finance record by ID
exports.getFinanceById = async (req, res) => {
  try {
    const finance = await Finance.findById(req.params.id);
    if (!finance) return res.status(404).json({ message: "Finance record not found" });
    res.status(200).json(finance);
  } catch (error) {
    res.status(500).json({ message: "Error fetching finance record", error });
  }
};

// Add new finance record
exports.addFinance = async (req, res) => {
  try {
    const newFinance = new Finance(req.body);
    const savedFinance = await newFinance.save();
    res.status(201).json(savedFinance);
  } catch (error) {
    res.status(500).json({ message: "Error adding finance record", error });
  }
};
