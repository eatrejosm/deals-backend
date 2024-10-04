import { GetItemInput, PutItemInput } from 'aws-sdk/clients/dynamodb';
import { Deal } from '../../models/Deal';
import { marshall } from '@aws-sdk/util-dynamodb';
import { dynamoDbClient } from '../../lib/dynamoDb';

export default class DealService {
  tableName: string;
  constructor() {
    this.tableName = 'Deals';
  }

  async findById(id: string) {
    const params: GetItemInput = {
      TableName: this.tableName,
      Key: marshall({ id }),
    };
    return await dynamoDbClient.get(params).promise();
  }

  async search() {
    // const params: GetItemInput = {
    //   TableName: this.tableName,
    //   Key: marshall({ id }),
    // };
    // return await dynamoDb.get(params).promise();
    return [];
  }
  async create(data: Deal) {
    const params: PutItemInput = {
      TableName: this.tableName,
      Item: marshall(data),
    };
    const createdItem = await dynamoDbClient.put(params).promise();
    return createdItem.$response;
  }
}
