import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <LogoContainer to="/">Logo Here</LogoContainer>
        <OptionsContainer>
          <OptionLink to="/">Shop</OptionLink>
          <OptionLink to="/contact">Contact</OptionLink>
          <OptionLink to="/signin">Login</OptionLink>
          <OptionLink to="/profile">Profile</OptionLink>
        </OptionsContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
