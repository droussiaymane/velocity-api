const express = require('express');
const app = express();

// Enable JSON parsing for request bodies
app.use(express.json());

// Define the endpoint for the steps
app.get('/', (req, res) => {
  const message="hello world"

  res.json({ messageReceived: message });
});

// Define the POST endpoint
app.post('/test-integration', (req, res) => {
  const message = req.body.message;
  res.json({ messageReceived: message });
});



// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
