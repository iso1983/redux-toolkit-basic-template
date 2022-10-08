import React from "react";
import Input from "../../components/form-input/form_input.component";
import { useDispatch } from "react-redux";
import { updateEmail, updateUsername } from "../../store/user/userSlice";
import styled from "styled-components";

// I used styled components just for you to see how it is defined
const FormField = styled.div`
  width: 350px;
  height: 210px;
  margin: auto;
  border-style: solid;
  border-width: 2px;
`;

const Button = styled.button`
  margin-left: 50px;
`;

const UserForm = () => {
  const dispatch = useDispatch();
  return (
    <FormField>
      <div>
        <p>
          <b>Edit user</b>
        </p>
        <Input
          type="text"
          onChange={(e) => {
// dispatch updates part of the store,in this case the userName, updateUsername is defined in the userSlice
            dispatch(updateUsername(e.target.value));
          }}
          placeholder="Enter Username,see the change live"
        />
        <Input type="text" placeholder="Email" onChange={(e)=>{dispatch(updateEmail(e.target.value))}} />
      </div>
      <Button>Save</Button>
    </FormField>
  );
};

export default UserForm;
