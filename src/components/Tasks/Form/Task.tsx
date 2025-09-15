import { Drawer } from "../../Drawer/Drawer";

interface FormTaskProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
}

export function FormTask({ opened, title, onClose }: FormTaskProps) {
  return (
    <Drawer opened={opened} onClose={onClose} title={title}>
      Hola
    </Drawer>
  );
}
