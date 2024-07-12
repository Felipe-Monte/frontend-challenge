"use client";

import { PrimaryInputSearchWithIcon } from "@/components/input-search/index";

import { SairaStencil } from "./styles";

import { ContainerHeader } from "./styles";
import { Logo } from "./styles";
import { CartCounter } from "../cart-counter";
import { useFilter } from "@/hooks/useFilter";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { setSearch, search } = useFilter();
  return (
    <ContainerHeader>
      <Logo className={SairaStencil.className}>Catálogo</Logo>

      <div>
        <PrimaryInputSearchWithIcon 
        value={search}
        $handleChange={setSearch}
        placeholder="Procurando por algo específico?" />
        <CartCounter />
      </div>
    </ContainerHeader>
  );
}
