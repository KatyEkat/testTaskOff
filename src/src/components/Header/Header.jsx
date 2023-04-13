import React, { useState } from "react";
import NFT from "../../../img/NFT.svg";
import CirclePurple from "../../../img/purplecircle.svg";
import ButtonLogin from "../Button/ButtonLogin";
// import Burger from "./Burger";
import * as S from "./Header";

function Header() {
  const [open, setOpen] = useState(false);

  const RightNav = ({ open }) => {
    return (
      <>
        <S.Ul open={open}>
          {/* <S.BurgerLogoStyle>
            <S.CirclePurple src={CirclePurple} />
            <S.Logo src={NFT} alt="ntf" />
          </S.BurgerLogoStyle> */}

          <S.LinkHeader href="#">
            <S.HeadingHome>Главная</S.HeadingHome>
          </S.LinkHeader>

          <S.LinkHeader href="#study">
            <S.Heading>Что даст обучение</S.Heading>
          </S.LinkHeader>
          <ButtonLogin />
        </S.Ul>
      </>
    );
  };

  return (
    <S.Header>
      <S.HeaderLogoBlock>
        <S.CirclePurple src={CirclePurple} />

        <S.LinkHeader href="#">
          <S.Logo src={NFT} alt="ntf" />
        </S.LinkHeader>
      </S.HeaderLogoBlock>


      <S.HeaderContainer>
        <S.HeaderLinks>
          <S.LinkHeader href="#">
            <S.HeadingHome>Главная</S.HeadingHome>
          </S.LinkHeader>

          <S.LinkHeader href="#study">
            <S.Heading>Что даст обучение</S.Heading>
          </S.LinkHeader>
        </S.HeaderLinks>
        <ButtonLogin />
      </S.HeaderContainer>

      <>
        <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
        </S.StyledBurger>
        <RightNav open={open} />
      </>
    </S.Header>
  );
}

export default Header;
