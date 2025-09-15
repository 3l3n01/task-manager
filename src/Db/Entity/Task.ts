import { Entity } from "dexie";
import { type Kplanify } from "../kplanify";

export class Task extends Entity<Kplanify> {
  id!: number;
  categoryId!: number;
  groupId!: number;
  title!: string;
  description!: string;
  createDate!: number;
  finalDate!: number;
  cancelDate!: number;
  status!: "pending" | "inProgress" | "completed" | "canceled";
  active!: boolean;
  duration!: number;
  waves!: boolean;
  persistent!: boolean;
  requestEvidence!: boolean;

  async Cancel() {
    this.status = "canceled";
    this.active = false;
    this.cancelDate = Date.now();
    await this.db.table("tasks").put(this);
  }

  async Complete(duration: number) {
    this.status = "completed";
    this.active = false;
    this.finalDate = Date.now();
    this.duration = duration;
    await this.db.table("tasks").put(this);
  }

  async Start() {
    this.status = "inProgress";
    this.active = true;
    await this.db.table("tasks").put(this);
  }

  async Pause() {
    this.active = false;
    await this.db.table("tasks").put(this);
  }
}
