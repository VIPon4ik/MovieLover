import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  NavigationLink,
  Header,
  Container,
  Main
} from './Layout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import ToggleThemeButton from 'components/ToggleThemeButton/ToggleThemeButton';

const Layout = ({ handleThemeChange, theme }) => {

  return (
    <>
      <Header>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
        <ToggleThemeButton handleThemeChange={handleThemeChange} theme={theme}/>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <ToastContainer position="top-center" autoClose="1000" />
    </>
  );
};

export default Layout;
