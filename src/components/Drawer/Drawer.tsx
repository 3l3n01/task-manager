import { Drawer as DW } from "@mantine/core";

interface FormTaskProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export function Drawer({ opened, title, onClose, children }: FormTaskProps) {
  return (
    <DW
      opened={opened}
      onClose={onClose}
      title={title}
      offset={8}
      radius="md"
      position="right"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
    >
      {children}
    </DW>
  );
}
