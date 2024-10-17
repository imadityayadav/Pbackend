const express = require('express');
const { getPatients, getPatientById } = require('../controllers/patientController');
const router = express.Router();

router.get('/', getPatients);
router.get('/:id', getPatientById);

module.exports = router;
