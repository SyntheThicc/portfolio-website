import styled, { keyframes } from 'styled-components';
export const FadeIn = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}
`;

export const Section = styled.section`
  background: ${(props) => (props.hero ? null : props.theme.backgroundColor)};
  animation: ${FadeIn} 2s;
  height: calc(100vh - 4rem);
  width: 100%;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: ${(props) => (props.hero ? 'center' : 'flex-start')};
  padding: ${(props) => (props.hero ? '0' : '4rem 0 3rem')};
  flex-direction: column;
  /* @media ${({ theme }) => theme.breakpoints.xsm} {
    justify-content: flex-start;
    padding: 1rem 0;
  } */
`;

export const Brackets = styled.span`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: 2rem;
  transition: 0.2s;
`;

export const Underline = styled.div`
  width: 30%;
  margin: 1rem auto;
  height: 3px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 2px #fff,
    0 0 3px ${({ theme }) => theme.secondaryColor},
    0 0 5px ${({ theme }) => theme.secondaryColor},
    0 0 2px ${({ theme }) => theme.secondaryColor},
    0 0 10px ${({ theme }) => theme.secondaryColor},
    0 0 20px ${({ theme }) => theme.secondaryColor};
  @media ${({ theme }) => theme.breakpoints.height} {
    margin: 2rem auto;
  }
`;

export const SectionTitle = styled.h3`
 margin-bottom:3rem;
  color: ${(props) =>
    props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  font-size: 1.5rem;
  letter-spacing: 2px;
  position: relative;
  font-family: ${({ theme }) => theme.secondaryFont}; 
  }
`;

export const Text = styled.p`
  letter-spacing: 1px;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 200;
  margin-top: 0.5rem;
  @media ${({ theme }) => theme.breakpoints.xsm} {
    letter-spacing: 0;
  }
  @media ${({ theme }) => theme.breakpoints.iphone} {
    font-size: 1.1rem;
    border: none;
    margin: 0rem 0 1rem;
  }
`;

export const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: black;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const ConstructionBorder = styled.img`
  max-width: 100%;
  margin-bottom: 3rem;
  height: 30%;
`;

export const AlertText = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
`;
