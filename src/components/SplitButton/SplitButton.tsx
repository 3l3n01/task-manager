import { IconChevronDown } from "@tabler/icons-react";
import {
  ActionIcon,
  Button,
  Group,
  Menu,
  useMantineTheme,
} from "@mantine/core";

// Styles
import classes from "./SplitButton.module.css";

interface btnAction {
  label: string;
  leftSection?: React.ReactNode;
  onClick?: () => void;
}

interface SplitButtonProps {
  variant?: "filled" | "outline" | "light" | "white" | "default" | "subtle";
  button: btnAction;
  actions: btnAction[];
}

export function SplitButton({
  button,
  actions,
  variant = "default",
}: SplitButtonProps) {
  const theme = useMantineTheme();

  return (
    <Group wrap="nowrap" gap={0}>
      <Button
        className={classes.button}
        variant={variant}
        onClick={button.onClick}
      >
        {button.label}
      </Button>
      <Menu
        transitionProps={{ transition: "pop" }}
        position="bottom-end"
        withinPortal
      >
        <Menu.Target>
          <ActionIcon
            variant={variant}
            color={theme.primaryColor}
            size={36}
            className={classes.menuControl}
          >
            <IconChevronDown size={16} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          {actions.map((item, index) => (
            <Menu.Item key={index} {...item}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
