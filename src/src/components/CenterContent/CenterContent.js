import styled from "styled-components";

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 115px;
  z-index: 1;

  @media screen and (max-width: 800px) {
    // height: 735px;
    display: flex;
    flex-direction: column;
      margin-top: 48px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  width: 717px;
  height: 241px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 105%;
  letter-spacing: -0.03em;
  color: #ffffff;

  @media screen and (max-width: 800px) {
    width: 248px;
    height: 78px;
    font-size: 25px;
    text-align: center;
    margin-bottom: 348px;
  }
`;

export const Heading = styled.h2`
  width: 499px;
  height: 63px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 120%;
  color: #cecece;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    width: 239px;
    height: 63px;
    font-size: 18px;
    text-align: center;
  }
`;

export const ManImage = styled.img`
  width: 527.97px;
  height: 658.23px;
  position: absolute;
  margin-left: 574px;
  margin-top: -248px;

  @media screen and (max-width: 800px) {
    width: 321px;
    height: 321px;
    margin: 0;
    position: absolute;
    margin-top: 100px;
  }
`;

export const ContainerCircles = styled.div`
  position: absolute;
`;

export const PurpleCircleShadow = styled.img`
  position: absolute;
  width: 414.9px;
  height: 414.9px;
  left: 15px;
  top: -188.98px;
  background: linear-gradient(
    170.98deg,
    rgba(95, 56, 255, 0.35) 25.59%,
    rgba(255, 14, 222, 0.35) 100.44%
  );
  filter: blur(86px);
  transform: rotate(11.97deg);
`;

export const GreenCircle = styled.img`
  box-sizing: border-box;

  position: absolute;
  width: 87.52px;
  height: 87.52px;
  margin-left: 481px;
  margin-top: 80px;

  background: radial-gradient(
      95.38% 95.38% at 50.77% 4.62%,
      #ddf92c 0%,
      #8fec36 44.51%,
      #00d448 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  filter: blur(2px);
  transform: rotate(-25.73deg);
  border-radius: 50%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
