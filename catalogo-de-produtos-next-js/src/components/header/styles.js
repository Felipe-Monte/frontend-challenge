import { styled } from "styled-components"

import { Saira_Stencil_One } from "next/font/google";

export const SairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ["latin"] }
);

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  svg {
    width: 32px;
    height: 32px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`
export const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`