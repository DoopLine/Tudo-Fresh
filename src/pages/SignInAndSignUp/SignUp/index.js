import React from "react";
import useFormState from "../../../hooks/useFormState";

import { Container, SignForm, Header } from "./styled";

import InputText from "../../../components/InputText";
import Button from "../../../components/Button";

const SignUp = () => {
  const [nameAndSurname, changeNameAndSurname, resetNameAndSurname] = useFormState("");
  const [userName, changeUserName, resetUserName] = useFormState("");
  const [email, changeEmail, resetEmail] = useFormState("");
  const [password, changePassword, resetPassword] = useFormState("");
  const [confirmPassword, changeConfirmPassword, resetConfirmPassword] = useFormState("");

  const handleSignUp = e => {
    e.preventDefault();
    resetUserName();
    resetPassword();
  };

  return (
    <Container>
      <Header>
        <h2>Não tenho uma conta</h2>
        <p>Crie uma conta com o seu email e palavra passe</p>
      </Header>
      <SignForm onSubmit={handleSignUp}>
        <InputText
          label="Nome e Sobrenome"
          name="nameAndSurname"
          value={nameAndSurname}
          required
          onChange={changeNameAndSurname}
          onClean={resetNameAndSurname}
        />
        <InputText
          label="Nome de usuário"
          name="name"
          value={userName}
          required
          onChange={changeUserName}
          onClean={resetUserName}
        />
        <InputText
          type="email"
          label="Email"
          name="email"
          value={email}
          required
          onChange={changeEmail}
          onClean={resetEmail}
        />
        <InputText
          label="Palavra passe"
          type="password"
          name="newPassword"
          value={password}
          onChange={changePassword}
          onClean={resetPassword}
          required
        />
        <InputText
          label="Confimar Palavra passe"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeConfirmPassword}
          onClean={resetConfirmPassword}
          required
        />
        <Button type="submit">Criar Conta</Button>
      </SignForm>
    </Container>
  );
};

export default SignUp;
