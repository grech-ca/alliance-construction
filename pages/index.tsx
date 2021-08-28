import { FC } from 'react';

import { Container, Typography } from '@material-ui/core';

import Layout from 'layouts/Layout';

import Slider, { Slide } from 'components/common/Slider';
import ProjectGallery, { Project } from 'components/common/ProjectGallery';

import { About, AboutContent, AboutImage } from 'styles/Landing';

const slides: Slide[] = [
  {
    image:
      'https://images.unsplash.com/photo-1626937526107-ca0be0eecccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTMwODM2OA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    image:
      'https://images.unsplash.com/photo-1627727997008-52d0fc4e1464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTMwODQxNA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    image:
      'https://images.unsplash.com/photo-1626541743398-b2a732923a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTMwODQyMw&ixlib=rb-1.2.1&q=80&w=1080',
  },
];

const projects: Project[] = slides.map(({ image }, index) => ({ images: [image], id: index }));

const HomePage: FC = () => (
  <Layout>
    <Container>
      <Typography>Реновация, строительство и проектирование домов</Typography>
      <Typography>Более 10 выполненных проектов</Typography>
    </Container>
    <Slider slides={slides} />
    <Container>
      <ProjectGallery projects={projects} />
    </Container>
    <About>
      <AboutContent>Blabla</AboutContent>
      <AboutImage src='https://images.unsplash.com/photo-1626541743398-b2a732923a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTMwODQyMw&ixlib=rb-1.2.1&q=80&w=1080' />
    </About>
  </Layout>
);

export default HomePage;
