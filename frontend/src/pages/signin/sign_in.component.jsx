import React, { useRef } from "react";
import { SignInContainer, SignInField } from "./sign-in.styles";
import Input from "../../components/form-input/form_input.component";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../redux/user/userThunk";

function SignIn() {
  const emailref = useRef();
  const nameref = useRef();
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);
  const navigate = useNavigate();

  async function checkUser(email, name) {
    try {
      const user = await axios.post("http://localhost:5000/signin", {
        email: email,
        name: name,
      });

      dispatch(fetchUser(user.data));
      redirect();
    } catch (err) {
      console.log(err);
    }
  }

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
            onClick={(e) =>
              checkUser(emailref.current.value, nameref.current.value)
            }
          >
            Login
          </button>
        </SignInField>
      )}
    </SignInContainer>
  );
}

export default SignIn;
