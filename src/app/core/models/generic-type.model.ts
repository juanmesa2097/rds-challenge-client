import { Status } from '../enums';

export interface GenericType {
  id: number;
  name: string;
  type: string;
  status: Status;
  createdAt: Date;
  updatedAt?: Date | null;
}
