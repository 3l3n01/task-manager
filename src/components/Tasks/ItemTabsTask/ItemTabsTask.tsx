import { Tabs, Box, ScrollAreaAutosize } from "@mantine/core";

// Styles
import STL from "./ItemTabsTask.module.css";

interface ItemTabsTaskProps {
  onTabChange?: (value: string | null) => void;
}

export function ItemTabsTask({ onTabChange }: ItemTabsTaskProps) {
  return (
    <Box>
      <Tabs
        defaultValue="tasks"
        variant="outline"
        visibleFrom="sm"
        classNames={{
          root: STL.tabs,
          list: STL.tabsList,
          tab: STL.tab,
        }}
        onChange={onTabChange}
      >
        <Tabs.List>
          <Tabs.Tab value="tasks">Avance</Tabs.Tab>
          <Tabs.Tab value="evidence">Evidencias</Tabs.Tab>
          <Tabs.Tab value="comentary">Comentarios</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Box h={450} className={STL.cont}>
        <ScrollAreaAutosize h={"100%"}>a</ScrollAreaAutosize>
      </Box>
    </Box>
  );
}
