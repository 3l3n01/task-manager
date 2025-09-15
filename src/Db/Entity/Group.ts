import { Entity } from "dexie";
import { type Kplanify } from "../kplanify";

export class Group extends Entity<Kplanify> {
  id!: number;
  name!: string;
  persistent!: boolean;
  createDate!: number;
}
