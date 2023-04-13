import styled from "styled-components";

export const Header = styled.div`
  display: flex;
`;

export const HeaderContainer = styled.span`
  display: flex;
  margin-top: 43px;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const HeaderContainerSpace = styled.div`
  display: flex;
`;

export const HeaderLogoBlock = styled.span`
  gap: 6px;
  display: flex;
  margin-top: 43px;
  align-items: center;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
  }
`;

export const CirclePurple = styled.img`
  width: 41.05px;
  height: 41.05px;
  left: -6px;

  @media screen and (max-width: 800px) {
    width: 27.27px;
    height: 27.27px;
    margin-left: -20px;
  }
`;

export const LinkHeader = styled.a``;

export const BurgerLogoStyle = styled.div`
  position: fixed;
  top: 24px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 73px;
  height: 29px;
  left: 55px;
  // top: 13px;
  // margin-right: 416px;
  // margin-left: 6px;

  @media screen and (max-width: 800px) {
    width: 48.49px;
    height: 19.26px;
    margin-left: 4px;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 105px;
  margin-right: 150px;
  margin-left: 416px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const HeadingHome = styled.h2`
  width: 92px;
  height: 28px;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 120%;
  color: #cecece;
  @media screen and (max-width: 800px) {
    width: 92px;
    height: 28px;
    margin-bottom: 20px;
    margin-top: 62px;
    margin-left: 20px;
  }
`;

export const Heading = styled.h2`
  width: 214px;
  height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 120%;
  color: #cecece;
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 214px;
    height: 28px;
    margin-bottom: 90px;
    margin-left: 20px;
  }
`;

// mobile

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#FBF7FE;" : "#FBF7FE;")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
    width: 25px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 5;

  li {
    width: 214px;
    height: 28px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 120%;
    color: #cecece;
    margin-right: 150px;
    text-align: center;
  }
  @media (min-width: 801px) {
    display: none;
  }
  @media (max-width: 800px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    background: #293344;
    border-radius: 0px 0px 0px 30px;
    width: 304px;
    height: 392px;
    li {
      color: #fff;
    }
  }
`;
