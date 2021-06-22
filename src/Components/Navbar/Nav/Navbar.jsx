import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../../Context';
import {
  Nav,
  NavContainer,
  LogoContainer,
  Logo,
  LinksContainer,
  NavLinks,
  Li,
  NavLink,
  Bar1,
  Bar2,
  Bar3,
  HamburgerMenu,
} from './NavElements';

import { Brackets } from '../../../PageElements/GlobalElements';

const pages = [
  {
    id: 1,
    path: '/about',
    name: 'About',
  },
  {
    id: 2,
    path: '/contact',
    name: 'Contact',
  },
  {
    id: 3,
    path: '/projects',
    name: 'Projects',
  },
];
<Li>
  <NavLink to='/about'>About</NavLink>
</Li>;

const Navbar = () => {
  const { isSidebarOpen, handleSidebar, closeSidebar } = useGlobalContext();

  const location = useLocation();
  return (
    <Nav>
      <NavContainer>
        <LogoContainer onClick={closeSidebar} to='/'>
          <Logo>
            <Brackets>[</Brackets> V Ć <Brackets> ]</Brackets>
          </Logo>
        </LogoContainer>
        <LinksContainer active={isSidebarOpen}>
          <NavLinks>
            {pages.map((page) => {
              return (
                <Li key={page.id}>
                  <NavLink
                    onClick={closeSidebar}
                    active={location.pathname === page.path}
                    to={page.path}
                  >
                    {page.name}
                  </NavLink>
                </Li>
              );
            })}
          </NavLinks>
        </LinksContainer>
        <HamburgerMenu onClick={handleSidebar}>
          <Bar1 active={isSidebarOpen} />
          <Bar2 active={isSidebarOpen} />
          <Bar3 active={isSidebarOpen} />
        </HamburgerMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
