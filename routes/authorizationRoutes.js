const express = require('express');
const { createAuthorizationRequest, getAuthorizationRequests,getAuthorizationRequestById ,updateAuthorizationRequestStatus} = require('../controllers/authorizationController');
const router = express.Router();

router.post('/create-authorization', createAuthorizationRequest);
router.get('/get-authorization', getAuthorizationRequests);
router.get('/get-patientById/:id',getAuthorizationRequestById)
router.put('/update-status/:id',updateAuthorizationRequestStatus)
module.exports = router;
