import { Box, Accordion } from "@mantine/core";

// Components
import { ItemTaskControl } from "./ItemTaskControl";
import { ItemTabsTask } from "./ItemTabsTask/ItemTabsTask";

// interface Task {}
interface TaskListProps {
  id: string;
  label: string;
  content: string;
  description: string;
}

export function ItemTask({ id, label, description }: TaskListProps) {
  return (
    <Box mb={15}>
      <Accordion.Item value={id} key={label}>
        <ItemTaskControl {...{ label, description }} />
        <Accordion.Panel mih={450}>
          <ItemTabsTask />
        </Accordion.Panel>
      </Accordion.Item>
    </Box>
  );
}
