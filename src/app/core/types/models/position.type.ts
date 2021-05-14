import { Area } from './area.type';
import { BaseType } from './base.type';

export type Position = BaseType & {
  name: string;
  area: Area | null;
  areaId: number;
};
