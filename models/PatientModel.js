const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    patientId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    contactInfo: {
      phone: { type: String, required: true },
      email: { type: String },
      address: { type: String },
    },
    medicalHistory: [
      {
        diagnosis: { type: String },
        notes: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],
    currentStatus: {
      condition: { type: String },
      doctorAssigned: { type: String },
      admitted: { type: Boolean, default: false },
      roomNumber: { type: String },
    },
    insuranceDetails: {
      provider: { type: String },
      policyNumber: { type: String },
      validity: { type: Date },
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Patient', PatientSchema);