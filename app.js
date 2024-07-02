const express = require('express');  // Importing Express
const morgan = require('morgan');    // Importing Morgan for logging
const bodyParser = require('body-parser');  // Importing Body Parser for parsing request bodies

const app = express();  // Creating an Express application instance

app.use(morgan('dev'));  // Using Morgan middleware to log requests
app.use(bodyParser.json());  // Using Body Parser middleware to parse JSON bodies

// Root route to send a greeting
app.get('/', (req, res) => {
  res.send('Hello!');
});

// About route to send a description
app.get('/about', (req, res) => {
  res.send('Express server assignment');
});

// Handle non-existent routes with a 404 error
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Configure the server to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
