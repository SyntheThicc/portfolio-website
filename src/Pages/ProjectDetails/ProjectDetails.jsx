import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { data } from '../../data';
import { FaGithub } from 'react-icons/fa';
import { Image, Brackets } from '../../PageElements/GlobalElements';

import {
  DetailsGrid,
  DesktopImg,
  MobileImg,
  LinkButton,
  Content,
  Heading,
  Subtitle,
  Footer,
  ImagesGrid,
  LinksContainer,
  DetailsSection,
  DetailsText,
} from './ProjectDetailsElements';

const Project = () => {
  const history = useHistory();
  const { id } = useParams();
  const [project, setProject] = useState(
    data.find((item) => item.id === parseInt(id))
  );

  return (
    <DetailsSection>
      <DetailsGrid>
        <ImagesGrid>
          <DesktopImg>
            <Image src={project.images[0]} />
          </DesktopImg>
          <MobileImg>
            <Image src={project.images[1]} />
          </MobileImg>
        </ImagesGrid>
        <Content>
          <Heading>{project.name}</Heading>
          {project.subtitle && (
            <Subtitle>
              <Brackets>[</Brackets> {project.subtitle} <Brackets>]</Brackets>
            </Subtitle>
          )}
          <DetailsText>{project.description}</DetailsText>
        </Content>
        <Footer>
          <LinkButton onClick={() => history.push('/projects')}>
            <BsArrowLeft style={{ fontSize: '1.5rem' }} />
          </LinkButton>
          <LinksContainer>
            <LinkButton href={project.liveLink}>Live Version</LinkButton>
            <LinkButton href={project.githubLink}>
              GitHub
              <FaGithub style={{ marginLeft: '5px' }} />
            </LinkButton>
          </LinksContainer>
        </Footer>
      </DetailsGrid>
    </DetailsSection>
  );
};

export default Project;
