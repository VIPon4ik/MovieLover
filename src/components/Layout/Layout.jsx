import React, { useState } from 'react';
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
import ToggleThemeButton from 'components/ToggleThemeButton/ToggleThemeButton';

const Layout = () => {

  return (
    <>
      <Header>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
        <ToggleThemeButton />
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
