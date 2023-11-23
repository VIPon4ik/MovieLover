import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationLink, Header } from './Layout.styled'

const Layout = () => {
  return (
    <>
      <Header>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Header>
      <Outlet />
    </>
  )
}

export default Layout
