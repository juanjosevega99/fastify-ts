import dotenv from 'dotenv';

dotenv.config();

const { SERVER_PORT } = process.env;

const config = {
  port: SERVER_PORT || 3000
};

export default config;
