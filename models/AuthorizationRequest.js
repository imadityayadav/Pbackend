const mongoose = require('mongoose');

const authorizationRequestSchema = new mongoose.Schema({
  name:{type:String,required:true},
  age:{type:Number,required:true},
  medicalHistory: [
    {
      condition: String,
      treatment: String,
      date: Date,
    },
  ],
  treatmentPlan: String,
  treatmentType: { type: String, required: true },
  insurancePlan: { type: String, required: true },
  dateOfService: { type: Date, required: true },
  diagnosisCode: { type: String, required: true },
  status: { type: String, default: 'Pending' },  // Status can be 'Pending', 'Approved', 'Denied'
  doctorNotes: String,
  labReports: [
    {
      testName: String,
      result: String,
      date: Date,
    },
  ],
  

  createdAt: { type: Date, default: Date.now },
});

const AuthorizationRequest = mongoose.model('AuthorizationRequest', authorizationRequestSchema);
module.exports = AuthorizationRequest;
