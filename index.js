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


app.post('/issuing/identify', (req, res) => {


  const users=[
    {
      "id": "1",
      "name": "John Doe",
      "email": "adev.off@gmail.com",
      "phone": "08123456789",
      "address": "Jl. Jend. Sudirman No. 1",
      "dob": "1990-01-01",


    },
    {
      "id": "2",
      "name": "John Doe 2",
      "email": "aymanedroussi.contact@gmail.com",
      "phone": "08123456789",
      "address": "Jl. Jend. Sudirman No. 1",
      "dob": "1990-01-01",
    }

  ]

  const userBody= req.body

  const user = users.find(user => user.email === userBody.emails[0]);

  if(!user){
    res.status(404).json({message:"user not found"})
  }
  else{
    const payload = {
      "id": user.id,
      "name": user.name,
      "email": user.email,
      "phone": user.phone,
      "address": user.address,
      "dob": user.dob,
      "photo": "https://i.ibb.co/7t7zFZJ/IMG-20201202-161547.jpg",


    }

    res.json(payload);
  }


});





// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
