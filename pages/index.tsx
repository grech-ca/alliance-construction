import { NextPage, GetStaticProps } from 'next';

import { omit } from 'lodash';

import { Container, Typography, Grid, Box } from '@material-ui/core';

import Layout from 'layouts/Layout';

import Slider from 'components/common/Slider';
import ProjectGallery from 'components/common/ProjectGallery';

import { StaticProject, getStaticProjects } from 'data/projects';

import { About, AboutContent, AboutImage } from 'styles/Landing';

// const slides: Slide[] = [
//   {
//     image:
//       'https://images.unsplash.com/photo-1626937526107-ca0be0eecccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTMwODM2OA&ixlib=rb-1.2.1&q=80&w=1080',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1627727997008-52d0fc4e1464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTMwODQxNA&ixlib=rb-1.2.1&q=80&w=1080',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1626541743398-b2a732923a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTMwODQyMw&ixlib=rb-1.2.1&q=80&w=1080',
//   },
// ];

// const projects: Project[] = slides.map(({ image }, index) => ({ images: [image], id: index }));

interface HomePageProps {
  projects: StaticProject[];
}

const HomePage: NextPage<HomePageProps> = ({ projects = [] }) => (
  <Layout>
    <Box my={4}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xl={12}>
            <Typography variant='h4'>Реновация, строительство и проектирование домов</Typography>
          </Grid>
          <Grid item xl={12}>
            <Typography variant='h5'>Более 10 выполненных проектов</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Container>
      <Slider objectFit='contain' slides={projects.map(({ photos: [photo] }) => ({ image: photo })).slice(0, 6)} />
    </Container>
    <Container>
      <ProjectGallery
        projects={projects.map(project => ({ ...omit(project, 'photos'), images: project.photos })).slice(0, 6)}
      />
    </Container>
  </Layout>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const projects = await getStaticProjects('portfolio');

  return {
    props: {
      projects,
    },
  };
};

export default HomePage;
