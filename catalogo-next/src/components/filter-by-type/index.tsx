"use client"
import { FilterList } from "./styles"
import { FilterItem } from "./styles"

export interface FilterItemProps {
  selected: boolean
}

export function FilterByType(){
  return(
    <FilterList>
      <FilterItem selected>Todos os produtos</FilterItem>
      <FilterItem selected={false}>Camisetas</FilterItem>
      <FilterItem selected={false}>Canecas</FilterItem>
    </FilterList>
  )
}