"use client"
import { Container } from "./styles";
import { FilterByType } from "../filter-by-type";
import { FilterByPriority } from "../filter-by-priority";

interface FilterBarProps {}

export function FilterBar(props: FilterBarProps){
  return(
    <Container>
      <FilterByType/>
      <FilterByPriority/>
    </Container>
  )
}