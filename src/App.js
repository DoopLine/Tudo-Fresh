import React from "react";
import { Route, Switch, useHistory} from "react-router-dom";
import GlobalStyled from "./styles/GlobalStyled";
import NavBar from "./components/NavBar";

//pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import House from "./pages/House";
import Office from "./pages/Office";
import Resale from "./pages/Resale";

//Componets
import ProductDetail from './pages/Products/ProductDetail';
import Modal from './components/Modal';

function App() {
  const history = useHistory();

  const displayModal = () => (
    <Modal onClose={()=> history.goBack()}>
      <ProductDetail />
    </Modal>
  );

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={displayModal} />
        <Route path="/house" component={House} />
        <Route path="/office" component={Office} />
        <Route path="/resale" component={Resale} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <GlobalStyled />
    </>
  );
}

export default App;
