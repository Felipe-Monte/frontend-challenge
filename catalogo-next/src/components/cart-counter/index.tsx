import { useLocalStorage } from "@/hooks/useLocalStorage"

import { Container } from "./styles"
import { CartIcon } from "./cart-icon"
import { CartCount } from "./styles"

export function CartCounter(){
  const { value } = useLocalStorage("cart-items")

  return(
    <Container>
      <CartIcon/>
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}