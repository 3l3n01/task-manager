import { Container, Group, Tabs, Title } from "@mantine/core";
import classes from "./Header.module.css";
import { IconSettings, IconHelp } from "@tabler/icons-react";

interface HeaderTabsProps {
  onTabChange?: (value: string | null) => void;
}

export function HeaderTabs({ onTabChange }: HeaderTabsProps) {
  return (
    <>
      <div className={classes.header}>
        <Container className={classes.mainSection} size="md">
          <Group justify="space-between">
            <Title>KPlanify</Title>
          </Group>
        </Container>
        <Container size="md">
          <Tabs
            defaultValue="tasks"
            variant="outline"
            visibleFrom="sm"
            classNames={{
              root: classes.tabs,
              list: classes.tabsList,
              tab: classes.tab,
            }}
            onChange={onTabChange}
          >
            <Tabs.List>
              <Tabs.Tab value="tasks">Tareas</Tabs.Tab>
              {/* <Tabs.Tab value="statistics">Estadisticas</Tabs.Tab> */}
              <Tabs.Tab value="categories">Categorias</Tabs.Tab>
              {/* <Tabs.Tab value="projects">Proyectos</Tabs.Tab> */}
              {/* <Tabs.Tab value="teamplates">Plantillas</Tabs.Tab> */}
              <Tabs.Tab
                value="help"
                ml="auto"
                leftSection={<IconHelp size={20} />}
              />
              <Tabs.Tab
                value="settings"
                leftSection={<IconSettings size={20} />}
              />
            </Tabs.List>
          </Tabs>
        </Container>
      </div>
    </>
  );
}
