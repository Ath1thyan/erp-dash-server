const express = require('express');
const {
  getAllCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany
} = require('../controllers/companyController');

const router = express.Router();

router.get('/', getAllCompanies);             // Get all companies
router.get('/:companyId', getCompany);        // Get a single company by ID
router.post('/', createCompany);              // Create a new company
router.put('/:companyId', updateCompany);     // Update a company by ID
router.delete('/:companyId', deleteCompany);  // Delete a company by ID

module.exports = router;
