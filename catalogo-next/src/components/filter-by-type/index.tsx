import { FilterList } from "./styles"
import { FilterItems } from "./styles"

interface FilterByTypesProps {}

export function FilterByType(props: FilterByTypesProps){
  return(
    <FilterList>
      <FilterItems>Todos os produtos</FilterItems>
      <FilterItems>Camisetas</FilterItems>
      <FilterItems>Canecas</FilterItems>
    </FilterList>
  )
}