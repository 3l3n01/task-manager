import {
  IconCode,
  IconListCheck,
  IconBug,
  IconFilterCode,
  IconAB,
  IconJetpack,
  IconAutomation,
  IconFileSearch,
  IconClipboardText,
  IconCertificate,
  IconCalendarStats,
  IconPresentation,
  IconAbacus,
  IconListDetails,
  IconUsers,
  IconAlertTriangle,
  IconEyeCog,
  IconLifebuoy,
  IconBarcode,
} from "@tabler/icons-react";

interface IconSelectProps {
  icon: string;
  size?: number;
  stroke?: number;
}

export function IconSelect({ icon, size, stroke }: IconSelectProps) {
  // Select iconc Category

  if (icon === "code") {
    return <IconCode size={size} stroke={stroke} />; // Desarrollo / Implementación
  } else if (icon === "bug") {
    return <IconBug size={size} stroke={stroke} />; // Corrección de errores (Bugs)
  } else if (icon === "codereview") {
    return <IconFilterCode size={size} stroke={stroke} />; // Revisión de Código / Pull Requests
  } else if (icon === "qa") {
    return <IconAB size={size} stroke={stroke} />; // Pruebas / QA
  } else if (icon === "automation") {
    return <IconJetpack size={size} stroke={stroke} />; // Deploy / Entrega / Producción
  } else if (icon === "devops") {
    return <IconAutomation size={size} stroke={stroke} />; // Infraestructura / DevOps
  } else if (icon === "id") {
    return <IconFileSearch size={size} stroke={stroke} />; // Investigación / I+D
  } else if (icon === "documentation") {
    return <IconClipboardText size={size} stroke={stroke} />; // Documentación
  } else if (icon === "learning") {
    return <IconCertificate size={size} stroke={stroke} />; // Capacitación / Formación
  } else if (icon === "meeting") {
    return <IconCalendarStats size={size} stroke={stroke} />; // Reuniones / Coordinación
  } else if (icon === "presentation") {
    return <IconPresentation size={size} stroke={stroke} />; // Presentaciones / Demos
  } else if (icon === "administration") {
    return <IconAbacus size={size} stroke={stroke} />; // Gestión Administrativa
  } else if (icon === "planification") {
    return <IconListDetails size={size} stroke={stroke} />; // Planificación Estratégica
  } else if (icon === "clients") {
    return <IconUsers size={size} stroke={stroke} />; // Interacción con Stakeholders / Clientes
  } else if (icon === "risk") {
    return <IconAlertTriangle size={size} stroke={stroke} />; // Gestión de Riesgos / Calidad
  } else if (icon === "optimization") {
    return <IconEyeCog size={size} stroke={stroke} />; // Optimización / Refactorización
  } else if (icon === "support") {
    return <IconLifebuoy size={size} stroke={stroke} />;
  } else if (icon === "product") {
    return <IconBarcode size={size} stroke={stroke} />;
  }

  // Puedes agregar más iconos aquí
  return <IconListCheck size={size} stroke={stroke} />;
}
