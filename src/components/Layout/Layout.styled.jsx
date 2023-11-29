import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: ${({ theme }) => theme.black};
  transition: color 0.2s ease-in-out;

  &.active {
    color: ${({ theme }) => theme.light_red};
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.light_red};
  }
`;

export const Header = styled.header`
  padding: 20px;
  display: flex;
  gap: 20px;
  min-width: 320px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  color: ${({ theme }) => theme.black};
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.second_white}
`

export const Container = styled.div`
  max-width: 1240px;
  min-width: 320px;
  min-height: 100vh;
  padding: 90px 20px 20px 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.second_white};
  color: ${({ theme }) => theme.black};
`;
