import React from "react";
// import BlueCircle from "../../../img/blueCircle.svg"
import StarEyes from "../../../img/starEyes.svg";
import WinkEmoj from "../../../img/winkEmoj.svg";
import MoneyEmoj from "../../../img/moneyEmoj.svg";
import BossEmoj from "../../../img/bossEmoj.svg";
import * as S from "./StudyingContainer";

function StudyingContent() {
  return (
    <S.Container>
      <S.Content>
        {/* <S.BlueCircle src={BlueCircle} /> */}
        <S.Header> Что даст тебе обучение?</S.Header>

        <S.ContentBlocks>
          <S.ContentBlock>
            <S.Emoji src={StarEyes} />
            <S.Heading>
              Откроешь свой первый криптокошелек и научишься с ним работать
            </S.Heading>
          </S.ContentBlock>

          <S.ContentBlock>
            <S.Emoji src={WinkEmoj} />
            <S.Heading>Поймёшь, как выбирать правильные дропы</S.Heading>
          </S.ContentBlock>

          <S.ContentBlock>
            <S.Emoji src={MoneyEmoj} />
            <S.Heading>
              Построишь план по быстрому приумножению заработанных средств
            </S.Heading>
          </S.ContentBlock>

          <S.ContentBlock>
            <S.Emoji src={BossEmoj} />
            <S.Heading>Узнаешь кто такие холдеры и флипперы</S.Heading>
          </S.ContentBlock>
        </S.ContentBlocks>
      </S.Content>
    </S.Container>
  );
}

export default StudyingContent;
