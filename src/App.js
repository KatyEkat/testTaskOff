// import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global-styles";
import "./App.css";
// import Home from "./src/pages/Home/Home.jsx";
// import Header from "./src/components/Header/Header.jsx";
import Home from "./src/pages/Home/Home.jsx";

function App() {
  return (
    <>
      <GlobalStyle />

      <Home />
    </>
  );
}

export default App;
