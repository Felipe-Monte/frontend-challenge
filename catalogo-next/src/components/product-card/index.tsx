import { formatValue } from "@/utils/formate-value";
import { Container } from "./styles";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export function ProductCard(props: ProductCardProps) {
  const price = formatValue(props.price);

  return (
    <Container>
      <img src={props.image} alt="Imagem do card" />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Container>
  );
}
