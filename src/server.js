const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import database connection and models
const { sequelize, testConnection } = require('./config/database');
const { User } = require('./models');

// Import routes
const userRoutes = require('./routes/userRoutes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Debug route to check if server is responding
app.get('/debug', (req, res) => {
  res.json({ message: 'Server is responding' });
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the CRUD API with Sequelize ORM',
    endpoints: {
      users: '/api/users'
    }
  });
});

// Routes - Make sure this is after the middleware and before starting the server
app.use('/api/users', userRoutes);

// Sync database and start server
const startServer = async () => {
  try {
    // Test database connection
    await testConnection();
    
    // Sync all models with the database
    // Note: force: false means it won't drop tables if they exist
    await sequelize.sync({ force: false });
    console.log('Database synchronized successfully');
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Access the web interface at http://localhost:${PORT}`);
      console.log(`API endpoints available at http://localhost:${PORT}/api/users`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();