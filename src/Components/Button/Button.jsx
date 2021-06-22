import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled.button`
  font-size: 1.3rem;
  padding: 0.5rem 1.5rem;
  text-transform:uppercase;
  letter-spacing:2px;
  background: transparent;
  color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  outline: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
      0 0 3px ${({ theme }) => theme.secondaryColor},
      0 0 5px ${({ theme }) => theme.secondaryColor},
      0 0 2px ${({ theme }) => theme.secondaryColor},
      0 0 10px ${({ theme }) => theme.secondaryColor},
      0 0 20px ${({ theme }) => theme.secondaryColor};
  }
`;

const Button = ({ children }) => {
  const history = useHistory();
  return <Btn onClick={() => history.push('/projects')}>{children}</Btn>;
};

export default Button;
