import styled from 'styled-components';
import { FadeIn } from '../../PageElements/GlobalElements';

export const ProjectsSection = styled.section`
  animation: ${FadeIn} 2s;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: ${({ theme }) => theme.backgroundColor};
  height: calc(100vh - 4rem);
  padding: 4rem 0 3rem;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.lg} {
    height: auto;
  }
`;

export const ProjectsGrid = styled.div`
  height: auto;
  width: auto;
  max-width: 1150px;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 2rem;
  margin: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    max-width: 100%;
    margin: 0;
  }
  @media ${({ theme }) => theme.breakpoints.xsm} {
    max-width: 90%;
  }
`;
