const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  medicalHistory: [
    {
      condition: String,
      treatment: String,
      date: Date,
    },
  ],
  treatmentPlan: String,
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
