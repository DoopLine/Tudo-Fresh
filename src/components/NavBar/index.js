import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/svg/logo.svg";

import useToggle from "../../hooks/useToggle";
import useFormState from "../../hooks/useFormState";

import {
  Container,
  NavWrapper,
  NavLink,
  NavList,
  NavSeachForm
} from "./styled";

import InputText from "../InputText";
import Modal from "../Modal";

import NavTopContent from "./NavTopContent";

const navItems = [
  { text: "início", href: "" },
  { text: "no cubico", href: "house" },
  { text: "produtos", href: "products" },
  { text: "na empresa", href: "office" },
  { text: "revenda", href: "resale" },
  { text: "sobre", href: "about" }
];

const NavBar = () => {
  const [isSearching, toggleIsSearching] = useToggle();
  const [searchKey, changeSearchKey, resetSearchKey] = useFormState("");
  return (
    <Container>
      {/* Condicional Component */}
      {isSearching && (
        <Modal onClose={toggleIsSearching}>
          <NavSeachForm>
            <InputText
              placeholder="Digite aqui..."
              value={searchKey}
              onChange={changeSearchKey}
              onClean={resetSearchKey}
            />
          </NavSeachForm>
        </Modal>
      )}
      {/* End */}
      <NavWrapper>
        <NavTopContent
          logoImg={logoImg}
          toggleIsSearching={toggleIsSearching}
        />
        {/* <hr style={{ marginTop: '.1rem'}}/> */}
        <NavList>
          {navItems.map((_item, i) => (
            <NavLink key={i} active={i === 0}>
              <Link to={_item.href}>{_item.text}</Link>
            </NavLink>
          ))}
        </NavList>
      </NavWrapper>
    </Container>
  );
};

export default NavBar;
