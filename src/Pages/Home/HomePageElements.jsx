import styled, { keyframes } from 'styled-components';
import { FadeIn } from '../../PageElements/GlobalElements';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  transform: translatey(-10%);
  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.height} {
    margin-top: 10rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.secondaryFont};
  line-height: 3rem;
  @media ${({ theme }) => theme.breakpoints.height} {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.secondaryColor};
  letter-spacing: 3px;
  font-weight: 400;
  line-height: 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  @media ${({ theme }) => theme.breakpoints.height} {
    font-size: 2rem;
  }
`;

// SIDEBAR
export const SocialIcons = styled.ul`
  height: auto;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
`;
export const Li = styled.li`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;
export const A = styled.a`
  color: #fff;
  transition: 0.2s;
  font-size: 2.5rem;
  display: flex;
  color: ${({ theme }) => theme.secondaryColor};
  &:hover {
    transform: scale(1.2);
  }
`;
// SIDEBAR

export const ImageWrapper = styled.div`
  margin-bottom: 1.5rem;
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
    0 0 3px ${({ theme }) => theme.secondaryColor},
    0 0 5px ${({ theme }) => theme.secondaryColor},
    0 0 2px ${({ theme }) => theme.secondaryColor},
    0 0 10px ${({ theme }) => theme.secondaryColor},
    0 0 20px ${({ theme }) => theme.secondaryColor};
  @media ${({ theme }) => theme.breakpoints.height} {
    width: 20rem;
    height: 20rem;
    margin-bottom: 3rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
// ==================
// HOME PAGE ELEMENTS
// ==================
