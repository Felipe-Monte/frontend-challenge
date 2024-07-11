import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const CartCount = styled.span`
  position: absolute;
  right: -10px;
  bottom: -5px;

  width: 24px;
  height: 24px;

  padding: 5px 8px;

  font-size: 16px;

  border-radius: 50%;
  background-color: var(--delete-color);
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;
