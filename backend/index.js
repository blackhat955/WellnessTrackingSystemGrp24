// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const workoutRoutes = require('./routes/workouts')

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Define routes
app.use(workoutRoutes)

// Start the server
const port = 3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
