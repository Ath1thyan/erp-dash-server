const Patient = require('../models/PatientModel');

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patients", error });
  }
};

// Get patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patient", error });
  }
};

// Add new patient
exports.addPatient = async (req, res) => {
    try {
      const newPatient = new Patient(req.body);
      await newPatient.save();
      return res.status(201).json({
        message: "Patient added successfully",
        patient: newPatient,
      });
    } catch (error) {
      console.error("Error adding patient:", error);
      return res.status(500).json({ message: "Error adding patient", error });
    }
  };
