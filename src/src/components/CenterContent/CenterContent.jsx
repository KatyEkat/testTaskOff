import React from "react";
import ManImg from "../../../img/MAN.svg";
import * as S from "./CenterContent.js";
import Join from "../Button/ButtonJoin";

function Content() {
  return (
    <>
      <S.ContainerCircles>
        <S.PurpleCircleShadow />
        <S.GreenCircle />
      </S.ContainerCircles>

      <S.ContainerContent>
        <S.ContainerText>
          <S.Header>
            Не упусти возможность войти в <strong>прибыльную нишу</strong>
          </S.Header>
          <S.Heading>
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
          </S.Heading>

          <Join />
        </S.ContainerText>

        <S.ManImage src={ManImg} />
      </S.ContainerContent>
    </>
  );
}

export default Content;
