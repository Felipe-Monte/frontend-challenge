import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

import { InputContainer } from "./styles";
import { InputSearch } from "./styles";

/* PASSANDO PROPRIEDADES DO INPUT PARA UMA DIV NORMAL */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  $handleChange: (value: string) => void
}

export function PrimaryInputSearchWithIcon(props: InputProps) {
  return (
    <InputContainer>
      <InputSearch onChange={(event) => props.$handleChange(event.target.value)} {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
