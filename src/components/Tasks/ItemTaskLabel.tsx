import { Group, Text, Box } from "@mantine/core";

import STL from "./ItemTaskLabel.module.css";

interface AccordionLabelProps {
  label: string;
  description: string;
}

export function ItemTaskLabel({ label, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Box>
        <Text w={800} className={STL.textTruncateSingleLineFades}>{label}</Text>
        <Text size="sm" c="dimmed" fw={400} w={800} className={STL.textTruncateSingleLineFades}>
          {description}
        </Text>
      </Box>
    </Group>
  );
}
