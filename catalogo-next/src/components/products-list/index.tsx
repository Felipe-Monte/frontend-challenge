"use client";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "../product-card";
import { Container } from "./styles";

export function ProductsList() {
  const { data } = useProducts();
  return (
    <Container>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image_url}
          title={product.name}
          price={product.price_in_cents}
        />
      ))}
    </Container>
  );
}
