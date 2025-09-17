import { Accordion } from "@mantine/core";
import { data } from "../../Data/Tasks";
// IconDots,ActionIcon

// import { RunnerBorder } from "../Effects/RunnerBorder";

// Components
import { ItemTask } from "./ItemTask";

// interface Task {}
interface TaskListProps {
  id: string;
  label: string;
  description: string;
  content: string;
}

export function randomBool(): boolean {
  return Math.random() < 0.5;
}

export function TaskList({}: TaskListProps) {
  const items = data.map((item) => <ItemTask {...item} />);

  return (
    <Accordion
      variant="separated"
      radius="xs"
      chevronPosition="right"
      chevron={null}
    >
      {items}
    </Accordion>
  );
}
