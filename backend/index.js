const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Simple route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Welcome to SPDT!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
