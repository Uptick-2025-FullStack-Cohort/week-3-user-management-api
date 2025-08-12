const { sequelize } = require('../config/database');
const User = require('./User');

// Initialize models
const models = {
  User
};

// Set up associations between models if needed
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  ...models,
  sequelize
};