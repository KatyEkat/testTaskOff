import styled from "styled-components";

export const CardsBlock = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`;

export const ContentBlockTop = styled.div`
  position: absolute;
  width: 300px;
  height: 310px;
  background: rgba(51, 62, 81, 0.7);
  backdrop-filter: blur(30.5px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const ContentBlockUnder = styled.div`
  width: 260px;
  height: 268px;
  margin-top: 62px;

  background: rgba(51, 62, 81, 0.7);
  backdrop-filter: blur(30.5px);

  border-radius: 20px;
`;
