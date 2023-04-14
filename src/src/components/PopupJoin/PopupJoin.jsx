import React from "react";
import CloseBtn from "../../../img/CloseBtn.svg";
import * as S from "./PopupJoin.js";

function PopupJoin({ active, setActive, closeForm }) {
  const onUpdate = async () => {
    const { error } = true;

    !error && closeForm();
  };

  if (!active) {
    return null;
  }

  return (
    <S.PopupArea onClick={() => setActive(false)}>
      <S.AuthForm onClick={(e) => e.stopPropagation()}>
        <S.BackgroundGreenLight />

        <S.Header> Начни прямо сейчас!</S.Header>
        <S.Heading>
          Получи все нужные навыки для заработка на NFT всего за 28 дней!
        </S.Heading>
        <S.FormInput type="email" name="email" placeholder="Ваш email" />

        <S.CloseBtn src={CloseBtn} onClick={() => setActive(false)} />
        <S.FormButton type="submit" active={true} onClick={onUpdate}>
          Оплатить
        </S.FormButton>
      </S.AuthForm>
    </S.PopupArea>
  );
}

export default PopupJoin;
