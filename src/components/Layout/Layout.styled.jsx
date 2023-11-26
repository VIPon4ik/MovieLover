import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "constants";

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  transition: color 0.2s ease-in-out;
  
  &.active {
    color: ${COLORS.light_red};
  }

  &:hover,
  &:active {
    color: ${COLORS.light_red};
  }
`

export const Header = styled.header`
  padding: 20px;
  display: flex;
  gap:20px;
  min-width: 320px;
  background-color: ${COLORS.white};
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
  position: fixed;
  width: 100%;
  color: ${COLORS.black}
`

export const Container = styled.div`
  max-width: 1240px;
  min-width: 320px;
  padding: 90px 20px 20px 20px;
  margin: 0 auto;
  background-color: ${COLORS.white};
  color: ${COLORS.black}
`