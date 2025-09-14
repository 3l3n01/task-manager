import { Alert } from "@mantine/core";
import { CategoryList } from "../../components/Lists/Categories";
import { IconInfoCircle } from "@tabler/icons-react";

export function CategoriesPage() {
  const icon = <IconInfoCircle />;

  return (
    <>
      <Alert
        variant="light"
        color="blue"
        title="Categorías e Íconos Fijos"
        icon={icon}
        mb={30}
      >
        Las categorías e íconos actuales son permanentes por ahora para asegurar coherencia; en versiones futuras podrá personalizar categorías, íconos o agregar los suyos propios.
      </Alert>
      <CategoryList />
    </>
  );
}
