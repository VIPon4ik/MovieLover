import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavigationLink, Header, Container } from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Header>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <ToastContainer position="top-center" autoClose="1000" />
    </>
  );
};

export default Layout;
