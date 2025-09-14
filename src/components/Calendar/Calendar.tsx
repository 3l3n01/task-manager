import { Box, Group, Select, Stack } from "@mantine/core";
import { useMemo } from "react";

// Store
import { useDateStore } from "../../Stores/dateStore";

// Styles
import CLS from "./Calendar.module.css";

// Const
const Years: string[] = Array.from({ length: 10 }, (_, i) =>
  (new Date().getFullYear() + i).toString()
);

const Months: string[] = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

const DayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

export function getDaysInMonth(year: number, month: number): number[] {
  const days = new Date(year, month, 0).getDate();
  return Array.from({ length: days }, (_, i) => i + 1);
}

export function getFilteredDaysInMonth(
  year: number,
  month: number,
  weekdays: number[]
): number[] {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1).filter((day) =>
    weekdays.includes(new Date(year, month - 1, day).getDay())
  );
}

export function getDaysWithNamesInMonth(
  year: number,
  month: number,
  dayNames: string[],
  weekdays: number[]
): { day: number; name: string }[] {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1);
    const dayIndex = date.getDay();
    return { day: i + 1, name: dayNames[dayIndex] };
  }).filter((d) => weekdays.includes(dayNames.indexOf(d.name)));
}

interface CalendarProps {
  onDateChange?: (year: number, month: number, day: number) => void;
}

export function Calendar({ onDateChange }: CalendarProps) {
  const daysValid = [1, 2, 3, 4, 5];

  const year = useDateStore((state) => state.year);
  const month = useDateStore((state) => state.month);
  const day = useDateStore((state) => state.day);

  // Actions
  const setYear = useDateStore((state) => state.setYear);
  const setMonth = useDateStore((state) => state.setMonth);
  const setDay = useDateStore((state) => state.setDay);

  // Recalcula los días automáticamente cuando cambian year, month o daysValid
  const days = useMemo(
    () => getDaysWithNamesInMonth(year, month, DayNames, daysValid),
    [year, month, daysValid]
  );

  return (
    <>
      <Box mb={25}>
        <Group justify="space-between" gap="xs">
          <Select
            data={Years}
            radius="xs"
            style={{ width: 90 }}
            defaultValue={year.toString()}
            checkIconPosition="left"
            onChange={(val) => {
              setYear(parseInt(val || "2024"));
              onDateChange && onDateChange(parseInt(val || "2024"), month, day);
            }}
          />
          {Months.map((mn, index) => (
            <Box
              key={index}
              className={`${CLS.month} ${
                index === Number(month) - 1 ? CLS.monthSelected : ""
              }`}
              onClick={() => {
                const newMonth = index + 1;
                const newDays = getDaysWithNamesInMonth(year, newMonth, DayNames, daysValid);
                const firstDay = newDays.length > 0 ? newDays[0].day : 1;
                setMonth(newMonth);
                setDay(firstDay);
                onDateChange && onDateChange(year, newMonth, firstDay);
              }}
            >
              {mn}
            </Box>
          ))}
        </Group>
        <Group justify="space-between" gap="xs" mt={10}>
          {days.map((dt, index) => (
            <Box
              key={index}
              className={`${CLS.day} ${dt.day == day ? CLS.daySelected : ""}`}
              onClick={() => {
                setDay(dt.day);
                onDateChange && onDateChange(year, month, dt.day);
              }}
            >
              <Stack align="center" justify="center" gap="xs">
                <Box>{dt.name}</Box>
                <Box>{dt.day}</Box>
              </Stack>
            </Box>
          ))}
        </Group>
      </Box>
    </>
  );
}
