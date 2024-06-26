import { styled } from "styled-components"
import { SearchIcon } from "./search-icon"
import { InputHTMLAttributes } from "react"

export const InputSearch = styled.input`
  width: 352px;

  border-radius: 8px;
  border: none;

  padding: 10px 16px;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  background-color: var(--bg-secondary);
  color: var(--text-dark);
`

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;

    width: 22px;
    height: 22px;

    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`
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