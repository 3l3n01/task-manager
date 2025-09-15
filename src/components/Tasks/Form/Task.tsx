import { Drawer } from "../../Drawer/Drawer";

interface FormTaskProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
}

export function FormTask({ opened, title, onClose }: FormTaskProps) {
  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <Drawer opened={opened} onClose={onClose} title={title} footer={<>A</>}>
      {content}
    </Drawer>
  );
}
