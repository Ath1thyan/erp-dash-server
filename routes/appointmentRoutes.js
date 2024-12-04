const express = require('express');
const router = express.Router();
const { getAllAppointments, getAppointmentById, addAppointment } = require('../controllers/appointmentController');

router.get('/', getAllAppointments);
router.get('/:id', getAppointmentById);
router.post('/', addAppointment);

module.exports = router;
