const AuthorizationRequest = require('../models/AuthorizationRequest');

// Create a new authorization request
exports.createAuthorizationRequest = async (req, res) => {
  try {
    console.log(req.body)
    
    const newRequest = new AuthorizationRequest(req.body);
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all authorization requests
exports.getAuthorizationRequests = async (req, res) => {
  try {
    const requests = await AuthorizationRequest.find()
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};


// Get an authorization request by patient ID
exports.getAuthorizationRequestById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const request = await AuthorizationRequest.findById(id);

    if (!request) {
      return res.status(404).json({ message: 'Authorization request not found' });
    }

    res.status(200).json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error. Could not retrieve the request.' });
  }
};


// Update an authorization request status by ID
exports.updateAuthorizationRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status input
    const validStatuses = ['Pending', 'Approved', 'Denied'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const request = await AuthorizationRequest.findById(id);

    if (!request) {
      return res.status(404).json({ message: 'Authorization request not found' });
    }

    // Update the status
    request.status = status;
    await request.save();

    res.status(200).json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error. Could not update the request.' });
  }
};