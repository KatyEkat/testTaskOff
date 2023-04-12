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
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  width: 596px;
  height: 58px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 130%;
  text-align: center;
  color: #ffffff;
  margin-top: 130px;
  margin-bottom: 65px;
`;

export const ContentBlocks = styled.div`
  display: flex;
  width: 650px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
`;

export const ContentCard = styled.div`
  display: grid;
  justify-items: center;
  margin: 0 0 50px 25px;

`;

export const Emoji = styled.img`
  width: 117px;
  height: 117px;
  margin-top: 45px;
  z-index: 2;
`;

export const Heading = styled.h2`
  width: 262px;
  height: 75px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.7px;
  color: #ffffff;
  margin-top: 23px;
  z-index: 2;
`;

export const Circles = styled.div``;

export const BlueCircle = styled.div`
  // width: 84px;
  // height: 84px;
  // margin-top: 104px;
  // margin-left: 164px;
  // margin-right: 83px;

  box-sizing: border-box;

  position: absolute;
  width: 84px;
  height: 84px;
  left: 164px;
  top: 104px;

  background: radial-gradient(
      63.25% 73.53% at 65.32% 77.65%,
      #045dfa 0%,
      #0fc1d7 83.16%,
      #06f6c7 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  transform: rotate(7.77deg);
  border-radius: 50%;
`;

export const PurpleCircle = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 151.89px;
  height: 151.89px;
  left: 984px;
  bottom: 1010px;

  /* Radial */

  background: radial-gradient(
      95.38% 95.38% at 50.77% 4.62%,
      #dea8ff 0%,
      #9d6ad9 44.51%,
      #7a2bf6 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  transform: rotate(-25.73deg);
  border-radius: 50%;
`;

export const BackgroundPurpleCircle = styled.div`
  position: absolute;
  width: 440.01px;
  height: 440.01px;
  left: 802px;
  bottom: 656px;

  background: linear-gradient(
    170.98deg,
    rgba(95, 56, 255, 0.25) 25.59%,
    rgba(255, 14, 222, 0.25) 100.44%
  );
  filter: blur(86px);
  transform: rotate(11.97deg);
`;

export const BackgroundPurpleCircleBottom = styled.div`
  position: absolute;
  width: 440.01px;
  height: 440.01px;
  left: 53px;
  top: 666px;

  background: linear-gradient(
    170.98deg,
    rgba(95, 56, 255, 0.25) 25.59%,
    rgba(255, 14, 222, 0.25) 100.44%
  );
  filter: blur(86px);
  transform: rotate(11.97deg);
`;

export const PurpleCircleGradient = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 131.66px;
  height: 131.66px;
  left: 985px;
  top: 810px;

  /* Radial */

  background: radial-gradient(
      95.38% 95.38% at 50.77% 4.62%,
      #dea8ff 0%,
      #9d6ad9 44.51%,
      #7a2bf6 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  filter: blur(12px);
  transform: rotate(-25.73deg);
  border-radius: 50%;
`;
