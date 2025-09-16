import { useDisclosure } from "@mantine/hooks";
import {
  Box,
  Group,
  Text,
  Tooltip,
  Popover,
  UnstyledButton,
} from "@mantine/core";

// Styles
import CLS from "./ProgressChart.module.css";
import HCSL from "../../Styles/horizontal.module.css";

interface SectionProps {
  title: string;
  porc: string;
  time: string;
  color: string;
}

const Section: React.FC<SectionProps> = ({ title, porc, time, color }) => {
  const [opened, { close, open }] = useDisclosure(false);
  // Extraer el número de porcentaje para usar como flex
  const flexValue = Number(porc.replace("%", ""));
  const isSmall = flexValue <= 15;

  if (isSmall) {
    // Ocultar solo los campos title, porc y time, pero mantener los elementos visuales
    return (
      <Box className={CLS.Section} style={{ flex: flexValue, minWidth: 0 }}>
        <Group p={0} h={24} className={HCSL.StackHorizontalContainer}>
          <Box
            bg={color}
            className={HCSL.StackSection}
            w={15}
            h={"100%"}
            style={{ borderRadius: "50px" }}
          ></Box>
          <Box
            className={HCSL.StackSectionMain}
            style={{
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
        </Group>
        <Group p={0} h={76} className={HCSL.StackHorizontalContainer}>
          <Box className={HCSL.StackSection} w={15}>
            <Group justify="center">
              <Box bg={color} h={76} w={2}></Box>
            </Group>
          </Box>
          <Box className={HCSL.StackSectionMain} style={{ minWidth: 0 }}>
            <Box>
              {/* Aquí solo se muestra el botón del popover en vez de los textos */}
              <Group justify="center" gap="xs">
                <Popover
                  width={220}
                  position="top"
                  withArrow
                  shadow="md"
                  opened={opened}
                >
                  <Popover.Target>
                    <UnstyledButton
                      variant="subtle"
                      size="xs"
                      style={{ padding: 0, minWidth: 0 }}
                      onMouseEnter={open}
                      onMouseLeave={close}
                      mb={6}
                    >
                      ...
                    </UnstyledButton>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text fw={600} fz={15} mb={5}>
                      {title}
                    </Text>
                    <Text fz={13} mb={3}>
                      Porcentaje: {porc}
                    </Text>
                    <Text fz={13}>Tiempo: {time}</Text>
                  </Popover.Dropdown>
                </Popover>
              </Group>
            </Box>
            <Box bg={color} w={"100%"} h={38} mt={7}></Box>
          </Box>
        </Group>
      </Box>
    );
  }

  // Diseño normal si el ancho es suficiente
  return (
    <Box className={CLS.Section} style={{ flex: flexValue, minWidth: 0 }}>
      <Group p={0} h={24} className={HCSL.StackHorizontalContainer}>
        <Box
          bg={color}
          className={HCSL.StackSection}
          w={15}
          h={"100%"}
          style={{ borderRadius: "50px" }}
        ></Box>
        <Box
          className={HCSL.StackSectionMain}
          style={{
            minWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Box>
      </Group>
      <Group p={0} h={76} className={HCSL.StackHorizontalContainer}>
        <Box className={HCSL.StackSection} w={15}>
          <Group justify="center">
            <Box bg={color} h={76} w={2}></Box>
          </Group>
        </Box>
        <Box className={HCSL.StackSectionMain} style={{ minWidth: 0 }}>
          <Box>
            <Group justify="space-between" gap="xs">
              <Text style={{ fontWeight: 600, fontSize: "20px" }}>{porc}</Text>
              <Tooltip label="H: Horas - M: Minutos" withArrow>
                <Text pr={5}>{time}</Text>
              </Tooltip>
            </Group>
          </Box>
          <Box bg={color} w={"100%"} h={38} mt={7}></Box>
        </Box>
      </Group>
    </Box>
  );
};

export function ProgressChart() {
  const data: { Title: string; porc: string; time: string; color: string }[] = [
    {
      Title: "Hrs. Trabajadas",
      porc: "12%",
      time: "14H 15M",
      color: "green.6",
    },
    { Title: "Hrs. Asignadas", porc: "24%", time: "28H 3M", color: "blue.6" },
    {
      Title: "Hrs. Restantes",
      porc: "64%",
      time: "90H 45M",
      color: "orange.6",
    },
  ];

  return (
    <Box mb={35}>
      <Text mb={10} fw={600} fz={17}>
        Carga de Trabajo
      </Text>
      <Box w={"100%"} mb={15} style={{ display: "flex", gap: "8px" }}>
        {data.map((dt, index) => (
          <Section
            key={index}
            title={dt.Title}
            porc={dt.porc}
            time={dt.time}
            color={dt.color}
          />
        ))}
      </Box>
    </Box>
  );
}
