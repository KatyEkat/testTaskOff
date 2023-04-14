import styled from "styled-components";

export const Login = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 22px;
  gap: 10px;
  width: 175px;
  height: 51px;
  border: 1px solid #ffffff;
  border-radius: 15px;
  background: transparent;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;

  :hover {
    color: #c3f33b;
    border: 1px solid #c3f33b;
  }
  :active {
    background: rgba(224, 255, 172, 0.05);
  }

  @media screen and (max-width: 800px) {
    margin-left: 20px;
    margin-bottom: 60px;
  }
`;

export const Join = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: #242424;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  gap: 10px;
  width: 336px;
  height: 66px;

  background: linear-gradient(92.84deg, #1dd844 1.44%, #cbf62e 126.29%);
  box-shadow: 0px 4px 9px rgba(203, 246, 46.5);
  border-radius: 20px;

  margin-top: 67px;
  margin-bottom: 270px;
  cursor: pointer;
  :hover {
    background: linear-gradient(92.84deg, #1dd844 1.44%, #cbf62e 126.29%);
    box-shadow: 0px 4px 15px rgba(203, 246, 46.5);
  }
  :active {
    background: linear-gradient(92.84deg, #1dd844 1.44%, #cbf62e 126.29%);
    box-shadow: 0px 4px 9px rgba(203, 246, 46.25);
  }

  @media screen and (max-width: 800px) {
    width: 277px;
    height: 51px;
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 50px;
  }
`;
