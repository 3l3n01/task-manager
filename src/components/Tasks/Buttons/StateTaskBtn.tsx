import { useState } from "react";
import { ActionIcon } from "@mantine/core";
import {
  IconPlayerPlayFilled,
  IconPlayerPauseFilled,
} from "@tabler/icons-react";

interface StateTaskBtnProps {
  status?: "stop" | "play" | "loading" | "error" | "success";
  onChange?: (value: string) => void;
}

export function StateTaskBtn({
  status = "stop",
  onChange = () => {},
}: StateTaskBtnProps) {
  const [currentStatus, setCurrentStatus] = useState(status);

  return (
    <ActionIcon
      size="lg"
      variant="subtle"
      color="gray"
      onClick={() => {
        // onChange && onChange("clicked")
        if (currentStatus === "stop") {
          setCurrentStatus("play");
          onChange("play");
        } else if (currentStatus === "play") {
          setCurrentStatus("stop");
          onChange("stop");
        }
      }}
    >
      {currentStatus === "stop" && <IconPlayerPlayFilled size={20} />}
      {currentStatus === "play" && <IconPlayerPauseFilled size={20} />}
    </ActionIcon>
  );
}
