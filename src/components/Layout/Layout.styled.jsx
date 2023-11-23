import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  transition: color 0.2s ease-in-out;
  
  &.active {
    color: #eb4034;
  }

  &:hover,
  &:active {
    color: #eb4034;
  }
`

export const Header = styled.header`
  padding: 20px;
  display: flex;
  gap:20px;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
  min-width: 320px;
`

export const Container = styled.div`
  max-width: 1240px;
  min-width: 320px;
  padding: 20px;
  margin: 0 auto;
`