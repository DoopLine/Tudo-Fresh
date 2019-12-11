import React from "react";

import { Container, ContentWrapper } from "./styled";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Footer from "../../components/Footer";

const SignInAndSignUp = () => {
  return (
    <Container>
      <ContentWrapper>
        <SignIn />
        <SignUp />
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default SignInAndSignUp;
