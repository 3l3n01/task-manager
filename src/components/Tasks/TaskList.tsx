import { Accordion, Group, Text, Center, Box } from "@mantine/core";
import { data } from "../../Data/Tasks";
import { IconPhoto } from "@tabler/icons-react";

// IconDots,ActionIcon

// Componentes
import { StateTaskBtn } from "./Buttons/StateTaskBtn";
// import { RunnerBorder } from "../Effects/RunnerBorder";

// interface Task {}
interface TaskListProps {}

interface AccordionLabelProps {
  label: string;
  description: string;
}

export function randomBool(): boolean {
  return Math.random() < 0.5;
}

export function TaskList({}: TaskListProps) {
  const items = data.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
        <AccordionControl {...item} />
        <Accordion.Panel>
          <Text size="sm">{item.content}</Text>
        </Accordion.Panel>
      </Accordion.Item>
  ));

  interface AccordionControlProps {
    id: string;
    label: string;
    description: string;
    content: string;
  }

  function AccordionControl({ label, description }: AccordionControlProps) {
    return (
      <Center>
        <Accordion.Control
          icon={
            <IconPhoto
              size={27}
              stroke={1.5}
              color="var(--mantine-color-dimmed)"
            />
          }
        >
          <AccordionLabel label={label} description={description} />
        </Accordion.Control>
        {/* <ActionIcon size="lg" variant="subtle" color="gray" style={{ marginRight: 17}}>
          <IconDots size={20} />
        </ActionIcon> */}
        <Box style={{ marginRight: 17 }}>
          <StateTaskBtn stoppable={false} />
        </Box>
      </Center>
    );
  }

  function AccordionLabel({ label, description }: AccordionLabelProps) {
    return (
      <Group wrap="nowrap">
        <div>
          <Text>{label}</Text>
          <Text size="sm" c="dimmed" fw={400}>
            {description}
          </Text>
        </div>
      </Group>
    );
  }

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
