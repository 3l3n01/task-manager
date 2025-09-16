import { Box } from "@mantine/core";

// Styles
import STL from "../../Styles/Effects/RunnerTail.module.css";

// Properties
interface RunnerBorderProperties {
  active?: boolean;
  children: React.ReactNode;
}

export function RunnerBorder({
  active = true,
  children,
}: RunnerBorderProperties) {
  return (
    <Box className={`${active ? STL.runnerTail : ""}`} mb={10}>
      {children}
    </Box>
  );
}
