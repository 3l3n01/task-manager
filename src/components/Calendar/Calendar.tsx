import { Box, Group, Select, Stack } from "@mantine/core";

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
    const date = new Date(year, month - 1, i + 1);
    const dayIndex = date.getDay();
    return { day: i + 1, name: dayNames[dayIndex] };
  }).filter((d) => weekdays.includes(dayNames.indexOf(d.name)));
}

export function Calendar() {
  var currentMonth = new Date().getMonth();
  var days = getDaysWithNamesInMonth(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    DayNames,
    [1, 2, 3, 4, 5]
  );

  return (
    <>
      <Box mb={25}>
        <Group justify="space-between" gap="xs">
          <Select
            data={Years}
            radius="xs"
            style={{ width: 90 }}
            defaultValue={new Date().getFullYear().toString()}
            checkIconPosition="left"
          />
          {Months.map((month, index) => (
            <Box
              key={index}
              className={`${CLS.month} ${
                index == currentMonth ? CLS.monthSelected : ""
              }`}
            >
              {month}
            </Box>
          ))}
        </Group>
        <Group justify="space-between" gap="xs" mt={10}>
          {days.map((dt, index) => (
            <Box
              key={index}
              className={`${CLS.day} ${dt.day == new Date().getDate() ? CLS.daySelected : ""}`}
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
