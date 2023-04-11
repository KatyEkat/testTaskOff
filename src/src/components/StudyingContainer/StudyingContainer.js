import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
`;

export const Content = styled.div`
  position: absolute;
  width: 1284px;
  height: 1093px;
  margin-top: 195px;
  margin-bottom: 200px;
  background: linear-gradient(212.69deg, #323e51 4.9%, #1d2532 55.16%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const BlueCircle = styled.img`
  width: 84px;
  height: 84px;
  margin-top: 104px;
  margin-left: 164px;
  margin-right: 83px;
`;

export const Header = styled.h1`
  width: 596px;
  height: 58px;
  left: 662px;
  top: 215px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 130%;
  text-align: center;
  color: #ffffff;
  margin-top: 130px;
`;

export const ContentBlocks = styled.div`
  display: flex;
`;

export const Emoji = styled.img`
  width: 117px;
  height: 117px;
  margin-top: 45px;
`;

export const Heading = styled.h2`
  width: 262px;
  height: 75px;
  left: 654px;
  top: 523px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.7px;
  color: #ffffff;
  margin-top: 23px;
`;

export const ContentBlock = styled.div`
  width: 300px;
  height: 310px;
  left: 635px;
  top: 338px;

  background: rgba(51, 62, 81, 0.7);
  backdrop-filter: blur(30.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
