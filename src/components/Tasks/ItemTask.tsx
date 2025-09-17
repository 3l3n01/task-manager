import { Box, Accordion, Text } from "@mantine/core";

// Components
import { ItemTaskControl } from "./ItemTaskControl";

// interface Task {}
interface TaskListProps {
  id: string;
  label: string;
  content: string;
  description: string;
}

export function ItemTask({ id, label, content, description }: TaskListProps) {
  return (
    <Box mb={15}>
      <Accordion.Item value={id} key={label}>
        <ItemTaskControl {...{ label, description }} />
        <Accordion.Panel>
          <Text size="sm">{content}</Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Box>
  );
}
