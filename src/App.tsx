import { useState } from "react";
import { Box, ScrollAreaAutosize, Container } from "@mantine/core";

//Componentes
import { HeaderTabs } from "./components/Header/Header";

// Pages
import { TasksPage } from "./Pages/Tasks/Tasks";
import { StatisticsPage } from "./Pages/Statistics/Statistics";
import { CategoriesPage } from "./Pages/Categories/Categories";
import { ProjectsPage } from "./Pages/Projects/Projects";
import { SettingsPage } from "./Pages/Settings/Settings";

// Styles
import FVS from "./Styles/FluidVertical.module.css";

export default function App() {
  const [activeTab, setActiveTab] = useState<string | null>("tasks");

  return (
    <Box className={FVS.Root} style={{ height: "100vh" }}>
      <Box className={FVS.ContainerDinamic}>
        <Box h={110} className={FVS.ContainerAutosize}>
          <HeaderTabs onTabChange={setActiveTab} />
        </Box>
        <ScrollAreaAutosize className={FVS.ContainerScrollable}>
          <Container size="md" py={10} pt={35}>
            {activeTab === "tasks" && <TasksPage />}
            {activeTab === "statistics" && <StatisticsPage />}
            {activeTab === "categories" && <CategoriesPage />}
            {activeTab === "projects" && <ProjectsPage />}
            {activeTab === "settings" && <SettingsPage />}
          </Container>
        </ScrollAreaAutosize>
      </Box>
    </Box>
  );
}
