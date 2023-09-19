import React, { useRef } from "react";
import { SignInContainer, SignInField } from "./sign-in.styles";
import Input from "../../components/form-input/form_input.component";

function SignIn() {
  const emailref = useRef();
  const nameref = useRef();

  return (
    <SignInContainer>
      <SignInField>
        <Input type="text" placeholder="Email" ref={emailref} />
        <Input type="text" placeholder="Name" ref={nameref} />
        <br />
        <button>Login</button>
      </SignInField>
    </SignInContainer>
  );
}

export default SignIn;
