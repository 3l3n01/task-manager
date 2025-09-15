import { Drawer as DW, Box, ScrollAreaAutosize } from "@mantine/core";

// Styles
import STL from "./Drawer.module.css";

interface FormTaskProps {
  opened: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  footerHeight?: number;
}

export function Drawer({
  opened,
  title,
  onClose,
  footer,
  children,
  footerHeight = 40,
}: FormTaskProps) {
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
      <Box className={STL.Root}>
        <ScrollAreaAutosize className={STL.ContainerScrollable}>
          {children}
        </ScrollAreaAutosize>
        {footer && (
          <Box className={STL.ContainerAutosize} h={footerHeight}>
            {footer}
          </Box>
        )}
      </Box>
    </DW>
  );
}
