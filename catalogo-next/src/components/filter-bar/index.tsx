"use client"
import { Container } from "./styles";
import { FilterByType } from "../filter-by-type";

interface FilterBarProps {}

export function FilterBar(props: FilterBarProps){
  return(
    <Container>
      <FilterByType/>
    </Container>
  )
}