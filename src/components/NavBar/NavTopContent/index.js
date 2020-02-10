import React from "react";
import { useHistory } from "react-router-dom";

import { FiSearch, FiMenu } from "react-icons/fi";
import { MdClear } from "react-icons/md";

import { Container, Logo, SearchPlaceHolder, Wrapper } from "./styled";

import ActionBox from "../../ActionBox";

const NavTopContent = ({
	logoImg,
	showMenu,
	toggleIsSearching,
	toggleShowMenu
}) => {
	const history = useHistory();
	return (
		<Container>
			{showMenu ? (
				<MdClear onClick={toggleShowMenu} />
			) : (
				<FiMenu onClick={toggleShowMenu} />
			)}
			<Logo
				src={logoImg}
				alt='TudoFresh logo brand'
				onClick={() => history.push("/")}
			/>
			<Wrapper showMenu={showMenu}>
				<SearchPlaceHolder onClick={toggleIsSearching}>
					<p>Pesquisar</p>
					<FiSearch />
				</SearchPlaceHolder>
				<ActionBox
					text='Nome de Usuário'
					type='user'
					title='Usuário'
					onClick={() => history.push("/user")}
				/>
				<ActionBox
					text='1000'
					type='cart'
					inverse={true}
					style={{ order: 2 }}
					title='Carrinho'
					onClick={() => history.push("/cart")}
				/>
			</Wrapper>
		</Container>
	);
};

export default NavTopContent;
