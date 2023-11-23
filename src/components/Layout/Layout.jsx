import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavigationLink, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Header>
      <main>
        <Outlet />
      </main>
      <ToastContainer position="top-center" autoClose="1000" />
    </>
  );
};

export default Layout;
