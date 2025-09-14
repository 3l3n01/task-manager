import { Tasks } from "../../components/Tasks/Tasks";
import { Calendar } from "../../components/Calendar/Calendar";
import { ProgressChart } from "../../components/ProgressChart/ProgressChart";

export function TasksPage() {
  return (
    <>
      <Calendar />
      <ProgressChart />
      <Tasks />
    </>
  );
}
