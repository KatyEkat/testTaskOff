import React from "react";
import Header from "../../components/Header/Header.jsx";
import CenterContent from "../../components/CenterContent/CenterContent.jsx";
import StudyingContainer from "../../components/StudyingContainer/StudyingContainer.jsx";
import * as S from "./Home.js";

function Home() {
  return (
    <S.Home>
      <S.Main>
        <Header />
        <CenterContent />
        <StudyingContainer />
      </S.Main>
    </S.Home>
  );
}

export default Home;
