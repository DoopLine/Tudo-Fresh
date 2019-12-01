import React from "react";
import GlobalStyled from "./styles/GlobalStyled";
import NavBar from "./components/NavBar";

//pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <Products /> */}
      <Cart />
      <GlobalStyled /> 
    </>
  );
}

export default App;
