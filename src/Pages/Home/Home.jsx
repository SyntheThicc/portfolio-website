import React from 'react';
import Photo from '../../assets/Images/myphoto.jpg';
import Video from '../../assets/Video/Video.mp4';
import Button from '../../Components/Button/Button';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

import {
  Underline,
  Section,
  BackgroundVideo,
  VideoBg,
} from '../../PageElements/GlobalElements';

import {
  ImageWrapper,
  SocialIcons,
  Li,
  A,
  TextWrapper,
  Title,
  Subtitle,
  Image,
  Wrapper,
} from './HomePageElements';

const Home = () => {
  return (
    <Section hero>
      <BackgroundVideo>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </BackgroundVideo>
      <SocialIcons>
        <Li>
          <A href='https://www.linkedin.com/in/vladimir-%C4%87ini%C4%87-227326215/'>
            <AiFillLinkedin />
          </A>
        </Li>
        <Li>
          <A href='https://www.instagram.com/force_choke_me_daddy/'>
            <AiFillInstagram />
          </A>
        </Li>

        <Li>
          <A href='https://github.com/SyntheThicc?tab=repositories'>
            <AiFillGithub />
          </A>
        </Li>
      </SocialIcons>
      <Wrapper>
        <ImageWrapper>
          <Image src={Photo} />
        </ImageWrapper>
        <TextWrapper>
          <Title>Vladimir Ćinić</Title>
          <Underline />
          <Subtitle>
            Self-Taught <br />
            Front-end Developer
          </Subtitle>
        </TextWrapper>
        <Button>My Work</Button>
      </Wrapper>
    </Section>
  );
};

export default Home;
