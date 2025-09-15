import { Drawer } from "@mantine/core";

interface FormTaskProps {
  opened: boolean;
  onClose: () => void;
}

export function FormTask({ opened, onClose }: FormTaskProps) {
  <Drawer opened={opened} onClose={onClose} title="Authentication">
    {/* Drawer content */}
  </Drawer>;
}
