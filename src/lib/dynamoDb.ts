import { DynamoDB } from 'aws-sdk';
import appConfig from '../config/appConfig';

export const dynamoDb = new DynamoDB.DocumentClient({
  region: appConfig.region,
  endpoint: appConfig.dbEndpoint,
});
