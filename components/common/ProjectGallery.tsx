import { FC, useState } from 'react';

import { Typography } from '@material-ui/core';

import Slider from 'components/common/Slider';

import {
  StyledProjectGallery,
  Header,
  Heading,
  ProjectSelect,
  Content,
  Info,
  ProjectSelectItem,
  ProjectSelectItemImage,
  ProjectSelectItemText,
} from 'styles/ProjectGallery';

export interface Project {
  id: number;
  images: string[];
  url?: string;
}

interface Props {
  projects: Project[];
}

const ProjectGallery: FC<Props> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(0);

  const project = projects[selectedProject];

  const slides = project.images.map(image => ({ image }));

  return (
    <StyledProjectGallery>
      <Header>
        <Heading>Реализованные проекты</Heading>
      </Header>
      <ProjectSelect>
        {projects.map(({ id, images: [firstImage] }, index) => (
          <ProjectSelectItem key={id} $active={selectedProject === index} onClick={() => setSelectedProject(index)}>
            <ProjectSelectItemText>№{id}</ProjectSelectItemText>
            <ProjectSelectItemImage src={firstImage} />
          </ProjectSelectItem>
        ))}
      </ProjectSelect>
      <Content>
        <Slider slides={slides} />
        <Info>
          <Typography>Проект №{project.id}</Typography>
        </Info>
      </Content>
    </StyledProjectGallery>
  );
};

export default ProjectGallery;
