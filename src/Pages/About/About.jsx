import React from 'react';
import Video from '../../assets/Video/Video.mp4';
import Img from '../../assets/Images/construction2.png';
import Button from '../../Components/Button/Button';
import {
  Section,
  SectionTitle,
  ConstructionBorder,
  AlertText,
} from '../../PageElements/GlobalElements';

const About = () => {
  return (
    <Section>
      <SectionTitle>About Me</SectionTitle>
      <ConstructionBorder src={Img} />
      <AlertText>
        This page is currently under construction,
        <br />
        try this one.
      </AlertText>
      <Button>Projects</Button>
    </Section>
  );
};

export default About;
