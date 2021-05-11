import { Status } from '../enums';

export interface GenericType {
  id: string;
  name: string;
  type: string;
  status: Status;
  createdAt: Date;
  updatedAt?: Date;
}
