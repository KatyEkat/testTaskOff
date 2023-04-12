import styled from "styled-components";

export const PopupArea = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  z-index: 1;
  backdrop-filter: blur(5px);
`;

export const AuthForm = styled.div`
  width: 670px;
  height: 425px;
  position: fixed;
  transition: 0.5s;
  background: radial-gradient(
      42.84% 203.07% at 15.58% -40.39%,
      #323e51 0%,
      #1d2532 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  overflow: hidden;
`;

export const Header = styled.h1`
  width: 455px;
  height: 47px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 105%;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-top: 56px;
  z-index: 1;
`;

export const Heading = styled.p`
  width: 460px;
  height: 50px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 120%;
  color: #ffffff;
  margin-top: 25px;
  z-index: 1;
`;

export const FormInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 268px 15px 20px;
  gap: 10px;

  width: 471px;
  height: 52px;

  background: #ffffff;
  border-radius: 10px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 35px;
  margin-bottom: 18px;
  z-index: 1;
`;

export const FormButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 145px;
  gap: 10px;
  width: 471px;
  height: 52px;
  left: 0px;
  top: 70px;
  background: linear-gradient(92.84deg, #1dd844 1.44%, #cbf62e 126.29%);
  border-radius: 10px;
  display: inline-block;
  :hover {
    background: linear-gradient(92.84deg, #1dd844 1.44%, #cbf62e 126.29%);
    box-shadow: 0px 4px 15px rgba(203, 246, 46.50);
  }
  :active {
    background: linear-gradient(92.84deg, #1dd844 1.44%, #cbf62e 126.29%);
    box-shadow: 0px 4px 9px rgba(203, 246, 46.25);
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #242424;
  cursor: pointer;
  z-index: 1;
`;

export const CloseBtn = styled.img`
  position: absolute;
  left: 600px;
  top: 45px;
`;

export const BackgroundGreenLight = styled.div`
  position: absolute;
  width: 424.93px;
  height: 386.23px;
  left: 417.09px;
  top: -95px;
  z-index: 0;
  background: linear-gradient(
    170.98deg,
    rgba(195, 243, 58, 0.25) 25.59%,
    rgba(41, 209, 89, 0.25) 100.44%
  );
  filter: blur(86px);
  transform: rotate(11.97deg);
`;
