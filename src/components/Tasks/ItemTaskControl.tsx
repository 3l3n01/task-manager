import { Center, Accordion, Box } from "@mantine/core";

// Icons
import { IconPhoto } from "@tabler/icons-react";

// Componentes
import { StateTaskBtn } from "./Buttons/StateTaskBtn";
import { ItemTaskLabel } from "./ItemTaskLabel";

interface AccordionControlProps {
  label: string;
  description: string;
}

export function ItemTaskControl({ label, description }: AccordionControlProps) {
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
        <ItemTaskLabel label={label} description={description} />
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
