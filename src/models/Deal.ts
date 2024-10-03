import { Address } from './Address';

export type Deal = {
  customerId: string;
  imageUrl: string;
  address: Address;
  area: number;
  status: 'progress' | 'done';
};
