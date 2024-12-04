const express = require('express');
const router = express.Router();
const { getAllPatients, getPatientById, addPatient} = require('../controllers/patientController');

router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.post('/', addPatient); 

module.exports = router;
