"use client";

import { PrimaryInputSearchWithIcon } from "@/components/input-search/index";

import { SairaStencil } from "./styles";

import { ContainerHeader } from "./styles";
import { Logo } from "./styles";
import { CartCounter } from "../cart-counter";

interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <ContainerHeader>
      <Logo className={SairaStencil.className}>Catálogo</Logo>

      <div>
        <PrimaryInputSearchWithIcon placeholder="Procurando por algo específico?" />
        <CartCounter />
      </div>
    </ContainerHeader>
  );
}
