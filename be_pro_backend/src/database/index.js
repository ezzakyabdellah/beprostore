import { Sequelize } from "sequelize-cockroachdb";

import * as config from "@/config/sequelize";

// import models
import userModel from "./models/user";
import tweetModel from "./models/tweet";
import productfoundModel from './models/productfound';
import productsearchModel from './models/productsearch';

// Configuration
const env = process.env.NODE_ENV;
const sequelizeConfig = config[env];

// Create sequelize instance
const sequelize = new Sequelize(sequelizeConfig);

// Import all model files
const modelDefiners = [userModel, tweetModel, productfoundModel, productsearchModel];

// eslint-disable-next-line no-restricted-syntax
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// Associations
Object.keys(sequelize.models).forEach((modelName) => {
  if (sequelize.models[modelName].associate) {
    sequelize.models[modelName].associate(sequelize.models);
  }
});

export default sequelize;
