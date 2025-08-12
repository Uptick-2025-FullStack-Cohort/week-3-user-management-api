// Mock data service to simulate database operations

let users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 30,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    age: 25,
    active: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    age: 35,
    active: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Get all users
const findAll = async () => {
  return [...users];
};

// Get user by ID
const findByPk = async (id) => {
  return users.find(user => user.id === parseInt(id)) || null;
};

// Create a new user
const create = async (userData) => {
  const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  const newUser = {
    id: newId,
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  users.push(newUser);
  return newUser;
};

// Update a user
const update = async (id, userData) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) return null;
  
  const updatedUser = {
    ...users[index],
    ...userData,
    id: parseInt(id), // Ensure ID doesn't change
    updatedAt: new Date()
  };
  
  users[index] = updatedUser;
  return updatedUser;
};

// Delete a user
const destroy = async (id) => {
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index === -1) return false;
  
  users = users.filter(user => user.id !== parseInt(id));
  return true;
};

module.exports = {
  findAll,
  findByPk,
  create,
  update,
  destroy
};