import { Entity } from "dexie";
import { type Kplanify } from "../kplanify";

export class EstimatedTime extends Entity<Kplanify> {
  id!: number;
  createDate!: number;
  taskId!: number;
  duration!: number;
}
