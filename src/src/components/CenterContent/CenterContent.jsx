import React, { useState } from "react";
import ManImg from "../../../img/MAN.svg";
import * as S from "./CenterContent.js";
import Join from "../Button/ButtonJoin";
import ModalJoin from "../PopupJoin/PopupJoin.jsx";

function Content() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      {/* <S.ContainerCircles>
        <S.PurpleCircleShadow />
        <S.GreenCircle />
      </S.ContainerCircles> */}

      <S.ContainerContent>
        <S.ContainerText>
          <S.Header>
            Не упусти возможность войти в <strong>прибыльную нишу</strong>
          </S.Header>
          <S.Heading>
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
          </S.Heading>

          <Join onClick={() => setModalActive(true)} />
        </S.ContainerText>

        <S.ManImage src={ManImg} />

        <ModalJoin active={modalActive} setActive={setModalActive} />
      </S.ContainerContent>
    </>
  );
}

export default Content;
