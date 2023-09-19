import styled from "styled-components";
import {Link} from "react-router-dom"

export const HeaderContainer = styled.div`
  height: 70px;
  background:purple;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// Below we style a  built in "Link" component from 'react-router-dom' using the styled object from "styled-components" library.We just pass Link component into styled as an argument
export const LogoContainer=styled(Link)`
background:yellow;
width: 70px;
padding: 25px;
`;

export const OptionsContainer=styled.div`
display:flex;
width:50%;
height:100%;
align-items:center;
`

export const OptionLink=styled(Link)`
    padding: 10px 15px;
    cursor:pointer;
    color:white;

`;