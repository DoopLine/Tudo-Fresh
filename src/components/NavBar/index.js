import React from "react";
import { Link, useLocation } from "react-router-dom";
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
	{ text: "no Kubico", href: "house" },
	{ text: "produtos", href: "products" },
	{ text: "na empresa", href: "office" },
	{ text: "revenda", href: "resale" },
	{ text: "sobre", href: "about" }
];

const NavBar = () => {
	const location = useLocation();
	const [isSearching, toggleIsSearching] = useToggle();
	const [showMenu, toggleShowMenu] = useToggle();
	const [searchKey, changeSearchKey, resetSearchKey] = useFormState("");

	return (
		<Container>
			{/* Condicional Component */}
			{isSearching && (
				<Modal onClose={toggleIsSearching}>
					<NavSeachForm>
						<InputText
							placeholder='Digite aqui...'
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
					toggleShowMenu={toggleShowMenu}
					showMenu={showMenu}
				/>
				<NavList showMenu={showMenu}>
					{navItems.map(_item => (
						<NavLink
							key={_item.href}
							active={location.pathname === `/${_item.href}`}
						>
							<Link
								to={_item.href}
								onClick={() => toggleShowMenu(false)}
							>
								{_item.text}
							</Link>
						</NavLink>
					))}
				</NavList>
			</NavWrapper>
		</Container>
	);
};

export default NavBar;
