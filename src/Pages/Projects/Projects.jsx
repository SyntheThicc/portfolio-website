import React from 'react';
import Card from '../../Components/Card/Card';
import { data } from '../../data';
import { SectionTitle } from '../../PageElements/GlobalElements';
import { ProjectsGrid, ProjectsSection } from './ProjectsPageElements';

const Projects = () => {
  return (
    <ProjectsSection>
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGrid>
        {data.map((project) => {
          return <Card key={project.id} {...project} />;
        })}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
