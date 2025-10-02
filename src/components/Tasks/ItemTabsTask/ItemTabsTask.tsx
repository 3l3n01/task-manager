import { useState } from "react";
import { Tabs, Box, ScrollAreaAutosize } from "@mantine/core";

// Components
import { Advance } from "./advance";
import { Evidence } from "./Evidence";
import { Comments } from "./Comments";

// Styles
import STL from "./ItemTabsTask.module.css";

interface ItemTabsTaskProps {
  onTabChange?: (value: string | null) => void;
}

export function ItemTabsTask({ onTabChange }: ItemTabsTaskProps) {
  const [activeTab, setActiveTab] = useState<string | null>("advance");

  return (
    <Box>
      <Tabs
        defaultValue="advance"
        variant="outline"
        visibleFrom="sm"
        value={activeTab}
        classNames={{
          root: STL.tabs,
          list: STL.tabsList,
          tab: STL.tab,
        }}
        onChange={(value: string | null) => {

          onTabChange?.(value);
          setActiveTab(value);
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="advance">Avance</Tabs.Tab>
          {/* <Tabs.Tab value="evidence">Evidencias</Tabs.Tab> */}
          <Tabs.Tab value="comentary">Comentarios</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Box h={450} className={STL.cont}>
        <ScrollAreaAutosize h={"100%"} p={15}>
          {activeTab == "advance" && <Advance />}
          {activeTab == "evidence" && <Evidence />}
          {activeTab == "comentary" && <Comments />}
        </ScrollAreaAutosize>
      </Box>
    </Box>
  );
}
