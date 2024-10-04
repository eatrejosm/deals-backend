import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 5000,
  dbEndpoint: process.env.DB_ENDPOINT || 'http://localhost:8000',
  region: process.env.REGION || 'local',
};
