import { SearchIcon } from "./search-icon"
import { InputHTMLAttributes } from "react"

import { InputContainer } from "./styles"
import { InputSearch } from "./styles"

/* PASSANDO PROPRIEDADES DO INPUT PARA UMA DIV NORMAL */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputSearchWithIcon(props: InputProps){
  return(
    <InputContainer>
      <InputSearch {...props}/>
      <SearchIcon/>
    </InputContainer>
  )
}