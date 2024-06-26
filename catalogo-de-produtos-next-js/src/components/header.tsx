"use client"

import { styled } from "styled-components"

import { PrimaryInputSearchWithIcon } from "@/components/input-search"

import { Saira_Stencil_One } from "next/font/google";

const SairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ["latin"] }
);


interface HeaderProps {}

const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  border: 2px solid black;
`
const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`

export function Header(props: HeaderProps){
  return(
    <ContainerHeader>
      <Logo className={SairaStencil.className}>Catálogo</Logo>

      <div>
        <PrimaryInputSearchWithIcon placeholder="Procurando por algo específico?"/>
      </div>

    </ContainerHeader>
  )
}