import { useRef } from "react";
import { Group, Button, TextInput, Textarea, Stack } from "@mantine/core";
import { IconDeviceFloppy } from "@tabler/icons-react";

// Components
import { Drawer } from "../../Drawer/Drawer";
import { CheckboxCard } from "../../CheckboxCard/CheckboxCard";

// Hooks
import { useForm } from "@mantine/form";

interface FormGroupProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
}

export function FormGroup({ opened, title, onClose }: FormGroupProps) {
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
          description="Agrega un nombre al grupo"
          placeholder="Tareas diarias"
          mb={5}
        />

        <Textarea
          withAsterisk
          label="Descripción"
          description="Pequeña descripción del grupo"
          placeholder="Aquí va la descripción del grupo"
          rows={3}
          mb={5}
        />

        <Stack align="stretch" justify="space-between" gap="sm" mt={15}>
          <CheckboxCard
            title="Grupo Persistente"
            description="Señala que el grupo no está asociada a una fecha específica de registro, sino que permanece activa en el calendario hasta que se marca como finalizado de forma explícita."
          />
        </Stack>
      </form>
    </Drawer>
  );
}
