import { StringAttributeValue } from 'aws-sdk/clients/dynamodb';

export type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};
