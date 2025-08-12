# Week 3 - User Management API

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and Sequelize ORM. It demonstrates how to use Sequelize to interact with a PostgreSQL database.

## Features

- RESTful API for user management
- Complete CRUD operations
- Data validation using Sequelize validators
- Web interface for interacting with the API
- PostgreSQL database integration

## Prerequisites

- Node.js (v12 or higher)
- PostgreSQL server

## Installation

1. Clone the repository or download the source code

2. Install dependencies
   ```
   npm install
   ```

3. Configure the database
   - Create a PostgreSQL database named `crud_app_db` (or update the .env file with your preferred database name)
   - Update the `.env` file with your PostgreSQL credentials

4. Start the application
   ```
   npm start
   ```
   or for development:
   ```
   npx nodemon src/server.js
   ```

5. Access the application
   - Web interface: http://localhost:3000
   - API: http://localhost:3000/api/users

## API Endpoints

| Method | Endpoint      | Description         |
|--------|---------------|---------------------|
| GET    | /api/users    | Get all users       |
| GET    | /api/users/:id | Get user by ID      |
| POST   | /api/users    | Create a new user   |
| PUT    | /api/users/:id | Update a user       |
| DELETE | /api/users/:id | Delete a user       |

## Project Structure

```
├── src/
│   ├── config/
│   │   └── database.js     # Database configuration
│   ├── controllers/
│   │   └── userController.js # User controller with CRUD operations
│   ├── models/
│   │   ├── index.js        # Models initialization
│   │   └── User.js         # User model definition
│   ├── routes/
│   │   └── userRoutes.js   # API routes for users
│   └── server.js           # Main application file
├── public/
│   └── index.html          # Web interface
├── .env                    # Environment variables
├── package.json            # Project dependencies
└── README.md              # Project documentation
```

## Sequelize Features Demonstrated

- Model definition with various data types
- Data validation
- Associations (can be extended)
- Database synchronization
- CRUD operations using Sequelize methods

## License

MIT
