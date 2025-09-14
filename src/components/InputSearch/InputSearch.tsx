import { useState } from "react";

// Componentes
import { Input, CloseButton } from "@mantine/core";

// Styles

// Props
interface InputSearchProps {
  placeholder: string;
  width?: string | number;
  onSearch?: (value: string) => void;
}

export function InputSearch({ placeholder, width = "100%" }: InputSearchProps) {
  const [value, setValue] = useState("");

  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSectionPointerEvents="all"
      rightSection={
        <CloseButton
          aria-label="Borrar"
          onClick={() => setValue("")}
          style={{ display: value ? undefined : "none" }}
        />
      }
      w={width}
    />
  );
}
