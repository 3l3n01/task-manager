import { Title, Group, Select, Box } from "@mantine/core";

// Hooks
// import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

// Componentes
import { IconCategoryPlus, IconReport } from "@tabler/icons-react";

// import { Tasks } from "../../components/Tasks/Tasks";
import { TaskList } from "../../components/Tasks/TaskList";
import { Calendar } from "../../components/Calendar/Calendar";
import { ProgressChart } from "../../components/ProgressChart/ProgressChart";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import { SplitButton } from "../../components/SplitButton/SplitButton";

// Forms
import { FormGroup } from "../../components/Tasks/Form/Group";
import { FormTask } from "../../components/Tasks/Form/Task";

export function TasksPage() {
  // const [FormTaskopened, { open, close }] = useDisclosure(false);
  const [FormTaskopened, setFormTaskOpened] = useState(false);
  const openTask = () => setFormTaskOpened(true);
  const closeTask = () => setFormTaskOpened(false);

  const [FormGroupopened, setFormGroupOpened] = useState(false);
  const openGroup = () => setFormGroupOpened(true);
  const closeGroup = () => setFormGroupOpened(false);

  return (
    <>
      <FormTask
        onClose={closeTask}
        opened={FormTaskopened}
        title="Agregar Tarea"
      />
      <FormGroup
        onClose={closeGroup}
        opened={FormGroupopened}
        title="Agregar Grupo"
      />

      <Calendar />
      <ProgressChart />

      {/* Listado de tareas */}
      <Group justify="space-between" gap="xs" mb={20}>
        <Box>
          <Group justify="space-between" gap="xs">
            <Select
              placeholder="Filtrar"
              clearable
              searchable
              data={["React", "Angular", "Vue", "Svelte"]}
              w={100}
            />
            <InputSearch placeholder="Buscar tarea por nombre..." width={450} />
          </Group>
        </Box>
        <SplitButton
          variant="default"
          button={{ label: "Agregar Tarea", onClick: openTask }}
          actions={[
            {
              label: "Agregar Grupo",
              onClick: openGroup,
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
