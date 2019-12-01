import React from "react";
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
  "início",
  "em casa",
  "produtos",
  "na empresa",
  "revenda",
  "sobre"
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
              <a href="*">{_item}</a>
            </NavLink>
          ))}
        </NavList>
      </NavWrapper>
    </Container>
  );
};

export default NavBar;
