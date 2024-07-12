import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  button {
    border: none;
    background: transparent;
    cursor: pointer;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

  }
`

export const PriorityFilter = styled.ul`
  position: absolute;
  top: 100%;
 
  width: 200px;

  background: white;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  border-radius: 4px;

  padding: 12px 16px;
  z-index: 999;

  list-style: none;

  li {
    color: var(--text-dark);
    font-size: 14px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`