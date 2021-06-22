import React from 'react';
import Img from '../../assets/Images/construction2.png';
import Button from '../../Components/Button/Button';

import {
  Section,
  SectionTitle,
  ConstructionBorder,
  AlertText,
} from '../../PageElements/GlobalElements';

const Contact = () => {
  return (
    <Section>
      <SectionTitle>Contact Me</SectionTitle>
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

export default Contact;
