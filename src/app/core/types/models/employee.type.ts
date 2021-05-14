import { BaseType } from './base.type';
import { Position } from './position.type';

export type Employee = BaseType & {
  name: string;
  username: string;
  dateOfBirth: Date;
  country: number;
  commission?: number | null;
  hiringDate: Date;
  position: Position | null;
  positionId: number | null;
  areaId: number; // NO pertenece a la entidad (Join);
};
