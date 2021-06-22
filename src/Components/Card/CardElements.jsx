import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.article`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: 0.3s;
  max-width: 90%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 1);
  background-color: ${({ theme }) => theme.cardColor};
  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 80%;
  }
`;

export const CardHeader = styled.header``;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 2px;
`;
export const CardFooter = styled.footer`
  padding: 0.5rem 0 1.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h5`
  font-size: 0.9rem;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
  font-family: ${({ theme }) => theme.secondaryFont};
`;

export const CardLink = styled(Link)`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.secondaryColor};
  letter-spacing: 5px;
  text-transform: uppercase;
  &:hover {
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px ${({ theme }) => theme.secondaryColor},
      0 0 5px ${({ theme }) => theme.secondaryColor},
      0 0 2px ${({ theme }) => theme.secondaryColor},
      0 0 10px ${({ theme }) => theme.secondaryColor},
      0 0 20px ${({ theme }) => theme.secondaryColor};
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: auto;
  top: 3rem;

  position: absolute;
`;
export const BorderImg = styled.img`
  width: 100%;
`;
