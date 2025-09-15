import Dexie, { EntityTable } from "dexie";

// DB version
import { DB_VERSION } from "./Version";

// Entidades
import { Category } from "./Entity/Category";
import { Task } from "./Entity/Task";
import { Group } from "./Entity/Group";
import { History } from "./Entity/History";
import { Evidence } from "./Entity/Evidence";
import { EstimatedTime } from "./Entity/EstimatedTime";

export class Kplanify extends Dexie {
  categories!: EntityTable<Category, "id">;
  tasks!: EntityTable<Task, "id">;
  groups!: EntityTable<Group, "id">;
  histories!: EntityTable<History, "id">;
  evidences!: EntityTable<Evidence, keyof Evidence>;
  estimatedTimes!: EntityTable<EstimatedTime, "id">;

  constructor() {
    super("kplanify");

    // Definicion dela base de datos
    this.version(DB_VERSION).stores({
      categories: "++id, icon, title, createDate, description",
      tasks:
        "++id, categoryId, groupId, title, description, createDate, finalDate, cancelDate, status, active, duration, waves, persistent, requestEvidence",
      groups: "++id, name, persistent, createDate",
      histories: "++id, taskId, createDate, finalDate, duration",
      evidences: "++id, historyId, createDate, path, name",
      estimatedTimes: "++id, taskId, createDate, duration",
    });

    // Definicion de las clases
    this.categories.mapToClass(Category);
    this.tasks.mapToClass(Task);
    this.groups.mapToClass(Group);
    this.histories.mapToClass(History);
    this.evidences.mapToClass(Evidence);
    this.estimatedTimes.mapToClass(EstimatedTime);

    // === HOOKS ===

    // Crear la fecha de creacion si no existe
    this.categories.hook("creating", (_pk, obj) => {
      if (obj.createDate == null) obj.createDate = Date.now();
    });

    this.tasks.hook("creating", (_pk, obj) => {
      if (obj.createDate == null) obj.createDate = Date.now();
    });

    this.groups.hook("creating", (_pk, obj) => {
      if (obj.createDate == null) obj.createDate = Date.now();
    });

    this.histories.hook("creating", (_pk, obj) => {
      if (obj.createDate == null) obj.createDate = Date.now();
    });

    this.evidences.hook("creating", (_pk, obj) => {
      if (obj.createDate == null) obj.createDate = Date.now();
    });

    this.estimatedTimes.hook("creating", (_pk, obj) => {
      if (obj.createDate == null) obj.createDate = Date.now();
    });

    // Actualizar los campos de fechas segun los cambios de estado
    this.tasks.hook("updating", (mods, _pk, current) => {
      if ("createDate" in mods) return { createDate: current.createDate };
      return;
    });

    // Eliminacion
    /* this.tasks.hook("deleting", (pk, obj, tx) => {
      console.log("Eliminando tarea", pk, obj);
    }); */
  }
}
