import styled from "styled-components";

export const Container = styled.div`
  width: 256px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 0 0 4px 4px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 8px 0;

    > div {
      width: 228px;
      height: 1px;

      padding: 0;
      margin: 8px 0;

      background: var(--shapes);
    }
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }
`;
