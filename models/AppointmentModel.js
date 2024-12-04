const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    appointmentId: { type: String, required: true, unique: true },
    patientId: { type: String, required: true, ref: 'Patient' },
    doctorId: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    reason: { type: String },
    status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Appointment', AppointmentSchema);
  