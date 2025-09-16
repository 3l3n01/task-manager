import { useRef } from "react";
import {
  Group,
  Button,
  TextInput,
  Textarea,
  Select,
  Stack,
} from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons-react";

// Components
import { Drawer } from "../../Drawer/Drawer";
import { CheckboxCard } from "../../CheckboxCard/CheckboxCard";

// Hooks
import { useForm } from "@mantine/form";

interface FormTaskProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
}

export function FormTask({ opened, title, onClose }: FormTaskProps) {
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
        <TextInput
          withAsterisk
          label="Nombre"
          description="Agrega un nombre a la tarea"
          placeholder="reunion con el equipo de desarrollo"
          mb={5}
        />
        <Group justify="space-between" gap="xs">
          <Select
            label="Categoría"
            placeholder="Categoría de la tarea"
            description="Input description"
            data={["React", "Angular", "Vue", "Svelte"]}
            w={"calc(50% - 5px)"}
            mb={5}
          />
          <Select
            label="Grupo"
            description="Grupo al que pertenece la tarea"
            placeholder="Desarrollo/Implementación"
            data={["React", "Angular", "Vue", "Svelte"]}
            w={"calc(50% - 5px)"}
            mb={5}
          />
        </Group>

        <Textarea
          withAsterisk
          label="Descripción"
          description="Pequeña descripción de la tarea"
          placeholder="Reunión para discutir los avances y próximos pasos del proyecto."
          rows={3}
          mb={5}
        />

        <TextInput
          label="Estimación de tiempo"
          description="D = Días, H = Horas, M = Minutos"
          placeholder="3H 20M"
        />

        <Stack align="stretch" justify="space-between" gap="sm" mt={15}>
          <CheckboxCard
            title="Parcialidades"
            description="Se divide en diferentes eventos"
          />
          <CheckboxCard
            title="Persistente"
            description="No estara fijado a la fecha actual, activo hasta finalizar"
          />
          <CheckboxCard
            title="Evidencias"
            description="Requiere solicitar evidencias al finaliar o terminar una etapa"
          />
        </Stack>
      </form>
    </Drawer>
  );
}
