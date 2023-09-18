import { useDispatch } from "react-redux";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { logout } from "../../redux/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <HeaderContainer>
        <LogoContainer to="/">Logo Here</LogoContainer>
        <OptionsContainer>
          <OptionLink to="/">Shop</OptionLink>
          <OptionLink to="/contact">Contact</OptionLink>
          <OptionLink to="/signin">Login</OptionLink>
          <OptionLink to="/profile">Profile</OptionLink>
          <OptionLink onClick={() => dispatch(logout())}>Logout</OptionLink>
        </OptionsContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
