const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Test server is working' });
});

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the test server' });
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log(`Access at http://localhost:${PORT}`);
});