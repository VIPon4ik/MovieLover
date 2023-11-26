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

const Layout = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) ?? false);

  const handleThemeChange = () => {
    localStorage.setItem('theme', JSON.stringify(!theme));
    setTheme(!theme)
  }
  
  return (
    <>
      <Header>
        <NavigationLink to="/movies">Movies</NavigationLink>
        <NavigationLink to="/">Home</NavigationLink>
        <ThemeButtonContainer>
          <ThemeButton type="checkbox" onChange={handleThemeChange} checked={theme}/>
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
