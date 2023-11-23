import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  
  &.active {
    color: orange;
  }
`

export const Header = styled.header`
  padding: 20px;
  display: flex;
  gap:20px;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
`