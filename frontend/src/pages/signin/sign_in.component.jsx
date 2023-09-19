import React, { useRef } from "react";
import { SignInContainer, SignInField } from "./sign-in.styles";
import Input from "../../components/form-input/form_input.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/user/userThunk";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const emailref = useRef();
  const nameref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSelector = useSelector((state) => state.user);

  function redirect() {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <SignInContainer>
      {userSelector.email ? (
        <h1>You are logged in,Redirecting in 1 second {redirect()}</h1>
      ) : (
        <SignInField>
          <Input type="text" placeholder="Email" ref={emailref} />
          <Input type="text" placeholder="Name" ref={nameref} />
          <br />
          <button
            onClick={(e) => {
              dispatch(
                fetchUser({
                  email: emailref.current.value,
                  name: nameref.current.value,
                })
              );
            }}
          >
            Login
          </button>
        </SignInField>
      )}
    </SignInContainer>
  );
}

export default SignIn;
