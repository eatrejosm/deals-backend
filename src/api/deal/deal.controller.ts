import { Request, Response } from 'express';
import { dynamoDbClient } from '../../lib/dynamoDb';

class DealController {
  tableName: string = 'Deals';

  constructor() {
    this.tableName = 'Deals';
  }

  // Using arrow function to maintain the context of 'this'
  findById = async (req: Request, res: Response): Promise<void> => {
    const id = req.query.id as string;
    try {
      const data = await dynamoDbClient
        .get({
          TableName: this.tableName,
          Key: {
            id: { S: id },
          },
        })
        .promise();

      if (data.Item) {
        res.status(200).json(data.Item);
      } else {
        res.status(404).json({ message: 'Deal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching the deal' });
    }
  };

  search = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await dynamoDbClient
        .scan({
          TableName: this.tableName,
        })
        .promise();

      res.status(200).json(response.Items);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error fetching deals' });
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const { id, name, value } = req.body;

    try {
      await dynamoDbClient
        .put({
          TableName: this.tableName,
          Item: {
            id: { S: id },
            name: { S: name },
            value: { N: value.toString() },
          },
        })
        .promise();

      res.status(201).json({ message: 'Deal created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error creating the deal' });
    }
  };
}

const dealController = new DealController();
export default dealController;
