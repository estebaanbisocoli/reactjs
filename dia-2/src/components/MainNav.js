import React from 'react';
import {Menu} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`
const MainNav = () => {
  return (
    <Menu style={{marginBottom : '20px'}}>
      <Menu.Item header>React Router</Menu.Item>
      <Menu.Item>
        <MenuLink activeStyle={{fontWeight: 'bold'}} exact to='/'>Home</MenuLink>
      </Menu.Item>
      <Menu.Item>
        <MenuLink activeStyle={{fontWeight: 'bold'}} to='/about'>About</MenuLink>
      </Menu.Item>
      <Menu.Item>
        <MenuLink activeStyle={{fontWeight: 'bold'}} to='/contact'>Contact Us</MenuLink>
      </Menu.Item>
    </Menu>
  );
};

export default MainNav;