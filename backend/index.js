const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log('Database is not Connected', err));

// app.use('/', require('./routes/authRoutes'))
// Routes
app.use('/', require('./routes/authRoutes'));

// Start the server
const port = 8100 || process.env.port;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 
