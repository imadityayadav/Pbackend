const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');
const authorizationRoutes = require('./routes/authorizationRoutes');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());  // To handle JSON body requests

app.use('/api', authorizationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
