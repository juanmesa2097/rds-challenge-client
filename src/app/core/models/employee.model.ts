import { Status } from '../enums';
import { GenericType } from './generic-type.model';

export type EmployeeArea = 'Administrativa' | 'Tecnología';

export interface Employee {
  id: number;
  name: string;
  username: string;
  DateOfBirth: Date;
  country: number;
  area: EmployeeArea;
  commission: number;
  hiringDate: Date;
  position: GenericType;
  status: Status;
  createdAt: Date;
  updatedAt?: Date;
}
