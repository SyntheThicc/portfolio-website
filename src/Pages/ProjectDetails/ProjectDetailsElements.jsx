import styled from 'styled-components';
import { FadeIn } from '../../PageElements/GlobalElements';

export const DetailsSection = styled.section`
  animation: ${FadeIn} 2s;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor};
  justify-content: center;
`;
export const DetailsText = styled.p`
  font-size: 1.3rem;
  font-weight: 200;
  padding: 0 1rem;
  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 2.2rem;
  }
  @media ${({ theme }) => theme.breakpoints.height} {
    font-size: 1.9rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.7rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1rem;
    padding: 0;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 1.2rem;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 1.25rem;
  }
  @media ${({ theme }) => theme.breakpoints.iphone} {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
`;
export const Heading = styled.h4`
  width: 100%;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.secondaryFont};
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 1.5rem;
  @media ${({ theme }) => theme.breakpoints.lg} {
  }
  @media ${({ theme }) => theme.breakpoints.height} {
    font-size: 1.9rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.7rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    font-size: 1.2rem;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 1.3rem;
  }
`;

export const DetailsGrid = styled.article`
  height: 90%;
  max-width: 750px;
  width: auto;
  border-radius: 3px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: ${({ theme }) => theme.cardColor};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 1);
  @media ${({ theme }) => theme.breakpoints.xsm} {
    border: none;
    padding: 1rem;
    height: 100%;
    margin: 0;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin: 0;
    padding: 1rem 0.5rem;
  }
`;

export const ImagesGrid = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  @media ${({ theme }) => theme.breakpoints.xsm} {
    padding: 0;
  }
`;

export const Content = styled.article`
  position: relative;
  height: 100%;
  color: #fff;
  grid-column: 1/3;
  grid-row: 0/1;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Footer = styled.footer`
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-top: 1rem;
  @media ${({ theme }) => theme.breakpoints.xsm} {
    padding: 0;
  }
`;

export const DesktopImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  grid-column: 0/1;
  grid-row: 0/1;
  margin-right: 0.5rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.5);
`;
export const MobileImg = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  grid-column: 2/2;
  grid-row: 1/1;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.5);
  img {
    object-fit: fill;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: inherit;
  a {
    margin-left: 1rem;
  }
`;

export const LinkButton = styled.a`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  background: transparent;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  outline: none;
  transition: 0.2s;
  cursor: pointer;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  &:hover {
    border: 1px solid ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px ${({ theme }) => theme.secondaryColor},
      0 0 5px ${({ theme }) => theme.secondaryColor},
      0 0 2px ${({ theme }) => theme.secondaryColor},
      0 0 10px ${({ theme }) => theme.secondaryColor},
      0 0 20px ${({ theme }) => theme.secondaryColor};
  }
  @media ${({ theme }) => theme.breakpoints.fold} {
    font-size: 0.6rem;
  }
`;

export const Subtitle = styled.p`
  width: 100%;
  text-transform: uppercase;
  font-weight: 200;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  text-align: center;
  span {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
