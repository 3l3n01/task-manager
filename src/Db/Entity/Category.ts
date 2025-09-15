import { Entity } from "dexie";
import { type Kplanify } from "../kplanify";

export class Category  extends Entity<Kplanify> {
  id!: number;
  createDate!: number;
  icon!: string;
  title!: string;
  description!: string;
}
