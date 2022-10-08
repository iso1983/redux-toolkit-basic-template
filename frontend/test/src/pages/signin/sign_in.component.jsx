import React from "react";
import { SignInContainer, SignInField } from "./sign-in.styles";
import Input from "../../components/form-input/form_input.component";

const SignIn = () => {
  return (
    <SignInContainer>
      <SignInField>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </SignInField>
    </SignInContainer>
  );
};

export default SignIn;
