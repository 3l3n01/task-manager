import { useRef } from "react";
import {
  Group,
  Button,
  TextInput,
  Text,
  ActionIcon,
  Tooltip,
  Table,
} from "@mantine/core";
import { IconDeviceFloppy, IconPlus } from "@tabler/icons-react";

// Components
import { Drawer } from "../../Drawer/Drawer";
import { FileDropZone } from "../../FileDropZone/FileDropZone";

// Hooks
import { useForm } from "@mantine/form";

interface FormEvidenceProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
}

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
];

export function FormEvidence({ opened, title, onClose }: FormEvidenceProps) {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
    </Table.Tr>
  ));

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      group: "",
      category: "",
      description: "",
      waves: false,
      persistent: false,
      requestEvidence: true,
    },
    validate: {
      title: (value) => (value.length < 2 ? "El título es muy corto" : null),
      description: (value) =>
        value.length < 2 ? "La descripción es muy corta" : null,
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const btn = () => {
    return (
      <Group justify="space-between" gap="xs">
        <Button
          variant="default"
          color="red"
          radius="xs"
          w={185}
          onClick={onClose}
        >
          Cancelar
        </Button>
        <Button
          radius="xs"
          w={185}
          leftSection={<IconDeviceFloppy size={20} />}
          onClick={() => {
            if (formRef.current) {
              formRef.current.requestSubmit();
            }
          }}
          disabled={!form.isDirty() && form.isValid()}
        >
          Guardar
        </Button>
      </Group>
    );
  };

  return (
    <Drawer opened={opened} onClose={onClose} title={title} footer={btn()}>
      <form
        ref={formRef}
        onSubmit={form.onSubmit(() => {
          form.reset();
          form.clearErrors();
        })}
      >
        {/* <TextInput
          label="Tarea"
          description="Nombre de la tarea"
          disabled
          mb={5}
        /> */}

        <Text mb={10} fw={600}>
          {" "}
          Enlaces{" "}
        </Text>

        <TextInput
          label="Nuevo Enlace"
          description="Enlace a documentación, reunion, o similar."
          mb={5}
          rightSection={
            <Tooltip label={"Agregar enlace"}>
              <ActionIcon variant="filled" radius="xs" aria-label="Settings">
                <IconPlus
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          }
        />

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Element position</Table.Th>
              <Table.Th>Element name</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>

        <Text mb={10} mt={20} fw={600}>
          {" "}
          Archivos{" "}
        </Text>

        <FileDropZone />

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Element position</Table.Th>
              <Table.Th>Element name</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </form>
    </Drawer>
  );
}
