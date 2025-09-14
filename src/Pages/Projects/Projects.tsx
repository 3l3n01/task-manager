import { Button, Group } from "@mantine/core";

import { Tasks } from "../../components/Tasks/Tasks";
import { InputSearch } from "../../components/InputSearch/InputSearch";

export function ProjectsPage() {
  return (
    <>
      <Group justify="space-between" gap="xs" mb={20}>
        <InputSearch placeholder="Buscar proyecto..." width={450} />
        <Button variant="light">Agregar Proyecto</Button>
      </Group>
      <Tasks />
    </>
  );
}
