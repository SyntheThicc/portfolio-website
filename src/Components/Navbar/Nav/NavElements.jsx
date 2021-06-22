import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.cardColor};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.7);
`;
export const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  height: 4rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const LogoContainer = styled(Link)`
  height: inherit;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover span {
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px ${({ theme }) => theme.secondaryColor},
      0 0 5px ${({ theme }) => theme.secondaryColor},
      0 0 2px ${({ theme }) => theme.secondaryColor},
      0 0 10px ${({ theme }) => theme.secondaryColor},
      0 0 20px ${({ theme }) => theme.secondaryColor};
  }
`;

export const Logo = styled.h4`
  color: ${({ theme }) => theme.primaryColor};
  font-family: ${({ theme }) => theme.secondaryFont};
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
`;

// NAV LINKS
export const LinksContainer = styled.div`
  width: auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: 0.2s;
  overflow: hidden; 
  padding:0 .5rem;
  visibility:${(props) => (props.active ? 'visible' : 'hidden')};
  opacity:${(props) => (props.active ? '1' : '0')};
  @media ${({ theme }) => theme.breakpoints.minMd}{
    visibility:visible;
    opacity:1;
    height:auto;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 1) 100%);
    position: fixed;
    right: 0rem;
    top: 4rem;
    flex-direction: column;
    width: 100%;
    height:100%
  }
}
`;

export const NavLinks = styled.ul`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
    width: 4rem;
    justify-content: flex-start;
  }
`;

export const Li = styled.li``;

export const NavLink = styled(Link)`
  font-size: 1.2rem;
  cursor: pointer;
  width: auto;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 300;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  transition: 0.2s;
  padding: 1rem;
  letter-spacing: 3px;
  &:after {
    position: absolute;
    content: '';
    background-color: ${(props) => props.theme.secondaryColor};
    left: 0;
    width: 4px;
    height: 45%;
    transition: 0.2s;
    border-radius: 4px;
    box-shadow: ${(props) =>
      props.active
        ? `0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px  ${props.theme.secondaryColor},
      0 0 5px  ${props.theme.secondaryColor},
      0 0 2px  ${props.theme.secondaryColor},
      0 0 10px  ${props.theme.secondaryColor},
      0 0 20px  ${props.theme.secondaryColor}`
        : null};
  }
  &:before {
    position: absolute;
    content: '';
    background-color: ${(props) => props.theme.secondaryColor};
    width: 4px;
    height: 45%;
    right: 0;
    transition: 0.3s;
    border-radius: 4px;
    box-shadow: ${(props) =>
      props.active
        ? `0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px  ${props.theme.secondaryColor},
      0 0 5px  ${props.theme.secondaryColor},
      0 0 2px  ${props.theme.secondaryColor},
      0 0 10px  ${props.theme.secondaryColor},
      0 0 20px  ${props.theme.secondaryColor}`
        : null};
  }
  &:hover:before,
  &:hover:after {
    background-color: ${({ theme }) => theme.secondaryColor};
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px ${({ theme }) => theme.secondaryColor},
      0 0 5px ${({ theme }) => theme.secondaryColor},
      0 0 2px ${({ theme }) => theme.secondaryColor},
      0 0 10px ${({ theme }) => theme.secondaryColor},
      0 0 20px ${({ theme }) => theme.secondaryColor};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 2rem;
    writing-mode: vertical-rl;
    text-orientation: upright;
    margin: 1rem 0;
    letter-spacing: -2px;
    font-size: 1rem;
    font-weight: 600;
    &:after {
      width: 100%;
      height: 4px;
      bottom: -3px;
      border-radius: 4px;
    }
    &:before {
      position: absolute;
      content: '';
      background-color: ${(props) => props.theme.secondaryColor};
      width: 100%;
      height: 4px;
      top: 0;
      transition: 0.3s;
      border-radius: 4px;
    }
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 2rem;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
`;
// NAV LINKS

// HAMBURGER MENU
export const Bar1 = styled.div`
  transition: 0.1s;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  height: 3px;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  transform: ${(props) =>
    props.active ? ' rotate(-45deg)' : 'translateY(-8px)'};
`;
export const Bar2 = styled.div`
  transition: 0.1s;
  width: 80%;
  background-color: ${(props) => props.theme.secondaryColor};
  height: 3px;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  display: ${(props) => (props.active ? 'none' : 'block')};
`;
export const Bar3 = styled.div`
  transition: 0.1s;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  height: 3px;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  transform: ${(props) => (props.active ? 'rotate(45deg)' : 'translateY(8px)')};
`;

export const HamburgerMenu = styled.div`
  cursor: pointer;
  height: 2.6rem;
  width: 2rem;
  position: relative;
  display: none;
  &:hover ${Bar1},&:hover ${Bar2},&:hover ${Bar3} {
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px ${({ theme }) => theme.secondaryColor},
      0 0 5px ${({ theme }) => theme.secondaryColor},
      0 0 2px ${({ theme }) => theme.secondaryColor},
      0 0 10px ${({ theme }) => theme.secondaryColor},
      0 0 20px ${({ theme }) => theme.secondaryColor};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;
// HAMBURGER MENU
