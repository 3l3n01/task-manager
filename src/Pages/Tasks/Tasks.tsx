import { Title, Group } from "@mantine/core";

// Componentes
// import { Tasks } from "../../components/Tasks/Tasks";
import { TaskList } from "../../components/Tasks/TaskList";
import { Calendar } from "../../components/Calendar/Calendar";
import { ProgressChart } from "../../components/ProgressChart/ProgressChart";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { SplitButton } from "../../components/SplitButton/SplitButton";
import { IconCategoryPlus } from "@tabler/icons-react";

export function TasksPage() {
  return (
    <>
      <Calendar />
      <ProgressChart />

      {/* Listado de tareas */}
      <Group justify="space-between" gap="xs" mb={20}>
        <InputSearch placeholder="Buscar tarea..." width={450} />
        <SplitButton
          variant="default"
          button={{ label: "Agregar Tarea" }}
          actions={[
            {
              label: "Agregar Grupo",
              leftSection: <IconCategoryPlus size={16} stroke={1.5} />,
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
