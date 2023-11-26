import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  NavigationLink,
  Header,
  Container,
  ThemeButton,
  ThemeButtonContainer,
} from './Layout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <NavigationLink to="/movies">Movies</NavigationLink>
        <NavigationLink to="/">Home</NavigationLink>
        <ThemeButtonContainer>
          <ThemeButton type="checkbox"/>
        </ThemeButtonContainer>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <ToastContainer position="top-center" autoClose="1000" />
    </>
  );
};

export default Layout;
