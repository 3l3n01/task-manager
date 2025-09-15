import { Entity } from "dexie";
import { type Kplanify } from "../kplanify";

export class History extends Entity<Kplanify> {
  id!: number;
  createDate!: number;
  finalDate!: number;
  taskId!: number;
  duration!: number;
}
