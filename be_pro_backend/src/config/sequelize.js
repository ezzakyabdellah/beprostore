import 'dotenv/config';
import fs from 'fs';

const { DB_HOST, DB_PORT = 5432, DB_NAME, DB_USER, DB_PASSWORD, DB_SSL_CR } = process.env;

const defaultConfig = {
  dialect: 'postgres',
  // timezone: "+03:00",
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: Number(DB_PORT),
  define: {
    paranoid: true,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    clientMinMessages: 'ignore',
  },
  logging: console.log,
  ssl: DB_SSL_CR,
};

export const development = {
  ...defaultConfig,
};

export const test = {
  ...defaultConfig,
  logging: false,
};

export const production = {
  ...defaultConfig,
  logging: false,
};
