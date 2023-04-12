import React from "react";
import NFT from "../../../img/NFT.svg";
// import MenuClosedMobile from "../../../img/menuClosed.svg";
import CirclePurple from "../../../img/purplecircle.svg";
import ButtonLogin from "../Button/ButtonLogin";

import * as S from "./Header";

function Header() {
  return (
    <S.HeaderContainer>
      <S.CirclePurple src={CirclePurple} />

      <S.LinkHeader href="#">
        <S.Logo src={NFT} alt="ntf" />
      </S.LinkHeader>

      <S.LinkHeader href="#">
        <S.HeadingHome>Главная</S.HeadingHome>
      </S.LinkHeader>

      <S.LinkHeader  href="#study"> 
        <S.Heading>Что даст обучение</S.Heading>
      </S.LinkHeader>

      <ButtonLogin />

      {/* <MenuClosedMobile /> */}
    </S.HeaderContainer>
  );
}

export default Header;
