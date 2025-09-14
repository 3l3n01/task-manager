// store/dateStore.ts
import { create } from "zustand";

type DateState = {
  year: number;
  month: number; // 1-12
  day: number; // 1-31 (validado al mutar)
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setDay: (day: number) => void;
  setDate: (year: number, month: number, day: number) => void;
  today: () => void;
  nextDay: () => void;
  prevDay: () => void;
};

const clampDate = (y: number, m: number, d: number) => {
  const dt = new Date(y, m - 1, 1);
  const last = new Date(y, m, 0).getDate();
  dt.setDate(Math.min(Math.max(1, d), last));
  return { y: dt.getFullYear(), m: dt.getMonth() + 1, d: dt.getDate() };
};

export const useDateStore = create<DateState>((set) => ({
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),

  setYear: (year) =>
    set((s) => {
      const { y, m, d } = clampDate(year, s.month, s.day);
      return { year: y, month: m, day: d };
    }),

  setMonth: (month) =>
    set((s) => {
      const { y, m, d } = clampDate(s.year, month, s.day);
      return { year: y, month: m, day: d };
    }),

  setDay: (day) =>
    set((s) => {
      const { y, m, d } = clampDate(s.year, s.month, day);
      return { year: y, month: m, day: d };
    }),

  setDate: (year, month, day) =>
    set(() => {
      const { y, m, d } = clampDate(year, month, day);
      return { year: y, month: m, day: d };
    }),

  today: () =>
    set(() => {
      const now = new Date();
      return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
      };
    }),

  nextDay: () =>
    set((s) => {
      const dt = new Date(s.year, s.month - 1, s.day + 1);
      return {
        year: dt.getFullYear(),
        month: dt.getMonth() + 1,
        day: dt.getDate(),
      };
    }),

  prevDay: () =>
    set((s) => {
      const dt = new Date(s.year, s.month - 1, s.day - 1);
      return {
        year: dt.getFullYear(),
        month: dt.getMonth() + 1,
        day: dt.getDate(),
      };
    }),
}));

// Selectores recomendados para evitar renders innecesarios
export const selectY = (s: DateState) => s.year;
export const selectM = (s: DateState) => s.month;
export const selectD = (s: DateState) => s.day;
export const selectActions = (s: DateState) => ({
  setYear: s.setYear,
  setMonth: s.setMonth,
  setDay: s.setDay,
  setDate: s.setDate,
  today: s.today,
  nextDay: s.nextDay,
  prevDay: s.prevDay,
});
