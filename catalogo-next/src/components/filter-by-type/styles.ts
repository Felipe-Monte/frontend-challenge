import styled from "styled-components"

import { FilterItemProps } from "./index"

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`

export const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${props => props.selected ? "600" : "400"};
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${props => props.selected ? "4px solid var(--orange-low)" : ""};
`