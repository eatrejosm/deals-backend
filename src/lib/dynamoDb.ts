import { DynamoDB } from 'aws-sdk';
import appConfig from '../config/appConfig';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env);
export const dynamoDbClient = new DynamoDB.DocumentClient({
  region: appConfig.region,
  endpoint: appConfig.dbEndpoint,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'dummy-access-key',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'dummy-secret-key',
});
