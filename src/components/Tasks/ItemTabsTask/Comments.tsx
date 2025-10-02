import { Textarea } from "@mantine/core";

export function Comments() {
  return (
    <>
      <Textarea
        label="Agregar Comentario"
        variant="filled"
        description="Informacion que pueda ser útil para el historial de la tarea"
        placeholder="se lleva a cabo una reunión con el cliente"
        rows={4}
      />
    </>
  );
}
