import { Entity } from "dexie";
import { type Kplanify } from "../kplanify";

export class Evidence extends Entity<Kplanify> {
  id!: number;
  createDate!: number;
  path!: string;
  name!: string;
  historyId!: number;
}
