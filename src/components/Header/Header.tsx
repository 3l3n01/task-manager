import { Burger, Container, Group, Tabs, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { IconSettings } from "@tabler/icons-react";

interface HeaderTabsProps {
  onTabChange?: (value: string | null) => void;
}

export function HeaderTabs({ onTabChange }: HeaderTabsProps) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <div className={classes.header}>
        <Container className={classes.mainSection} size="md">
          <Group justify="space-between">
            <></>
            <Title>Simple Task</Title>

            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="xs"
              size="sm"
            />

            {/* - */}
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
              <Tabs.Tab value="statistics">Estadisticas</Tabs.Tab>
              <Tabs.Tab value="categories">Categorias</Tabs.Tab>
              <Tabs.Tab value="projects">Proyectos</Tabs.Tab>
              <Tabs.Tab
                value="settings"
                ml="auto"
                leftSection={<IconSettings size={20} />}
              />
            </Tabs.List>
          </Tabs>
        </Container>
      </div>
    </>
  );
}
