import { Title, Group } from "@mantine/core";

// Hooks
import { useDisclosure } from "@mantine/hooks";

// Componentes
import { IconCategoryPlus, IconReport } from "@tabler/icons-react";

// import { Tasks } from "../../components/Tasks/Tasks";
import { TaskList } from "../../components/Tasks/TaskList";
import { Calendar } from "../../components/Calendar/Calendar";
import { ProgressChart } from "../../components/ProgressChart/ProgressChart";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { SplitButton } from "../../components/SplitButton/SplitButton";
import { FormTask } from "../../components/Tasks/Form/Task";

export function TasksPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <FormTask onClose={close} opened={opened} title="" />

      <Calendar />
      <ProgressChart />

      {/* Listado de tareas */}
      <Group justify="space-between" gap="xs" mb={20}>
        <InputSearch placeholder="Buscar tarea..." width={450} />
        <SplitButton
          variant="default"
          button={{ label: "Agregar Tarea", onClick: open }}
          actions={[
            {
              label: "Agregar Grupo",
              leftSection: <IconCategoryPlus size={16} stroke={1.5} />,
            },
            {
              label: "Descargar Reporte",
              leftSection: <IconReport size={16} stroke={1.5} />,
            },
          ]}
        />
      </Group>

      <TaskList />

      {/* Grupos */}

      <Title order={3} mt={30} mb={10}>
        Otras funcionalidades
      </Title>

      <TaskList />
    </>
  );
}
