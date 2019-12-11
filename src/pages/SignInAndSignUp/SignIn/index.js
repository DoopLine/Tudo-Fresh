import React from "react";
import useFormState from "../../../hooks/useFormState";

import { Container, SignForm, Header } from "./styled";

import InputText from "../../../components/InputText";
import Button from "../../../components/Button";

const SignIn = () => {
  const [userName, changeUserName, resetUserName] = useFormState("");
  const [password, changePassword, resetPassword] = useFormState("");

  const handleSignIn = e => {
    e.preventDefault();
    resetUserName();
    resetPassword();
  };

  return (
    <Container>
      <Header>
        <h2>Eu já tenho uma conta</h2>
        <p>Inicie sessão com nome de usuário, email e palavra passe</p>
      </Header>
      <SignForm onSubmit={handleSignIn}>
        <InputText
          label="Nome de usuário ou Email"
          name="userName"
          value={userName}
          required
          onChange={changeUserName}
          onClean={resetUserName}
        />
        <InputText
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={changePassword}
          onClean={resetPassword}
          required
        />
        <Button type="submit">Iniciar Sessão</Button>
      </SignForm>
    </Container>
  );
};

export default SignIn;
