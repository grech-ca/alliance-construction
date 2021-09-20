import { FC, useState } from 'react';

import Link from 'next/link';
import { Typography, Box, Button } from '@material-ui/core';

import Slider from 'components/common/Slider';

import {
  StyledProjectGallery,
  ProjectSelect,
  Content,
  ProjectSelectItem,
  ProjectSelectItemImage,
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
      <Box display='flex'>
        <Box mr={2}>
          <Typography variant='h4'>Реализованные проекты</Typography>
        </Box>
        <Link href='/portfolio'>
          <Button size='small' variant='contained' color='primary'>
            Смотреть все
          </Button>
        </Link>
        <Box flexGrow={1} />
        <Link href='/projects'>
          <Button variant='contained' color='primary' size='small'>
            Типовые проекты
          </Button>
        </Link>
      </Box>
      <ProjectSelect>
        {projects.map(({ id, images: [firstImage] }, index) => (
          <ProjectSelectItem key={id} $active={selectedProject === index} onClick={() => setSelectedProject(index)}>
            <ProjectSelectItemImage src={firstImage} />
          </ProjectSelectItem>
        ))}
      </ProjectSelect>
      <Content>
        <Box>
          <Slider slides={slides} objectFit='contain' />
        </Box>
        <Box ml={3} display='flex' flexDirection='column'>
          <Box width='100%'>
            <Typography variant='h4'>Проект №{project.id}</Typography>
          </Box>
          <Box mt={4}>
            <Link href={`/portfolio/${project.id}`}>
              <Button color='primary' variant='contained'>
                Перейти к проекту
              </Button>
            </Link>
          </Box>
        </Box>
      </Content>
    </StyledProjectGallery>
  );
};

export default ProjectGallery;
