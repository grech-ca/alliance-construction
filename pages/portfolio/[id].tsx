import { Fragment } from 'react';

import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { Container } from '@material-ui/core';

import Layout from 'layouts/Layout';

import { getStaticProject, getStaticProjects, StaticProject } from 'data/projects';

interface PortfolioProjectPageProps {
  project: StaticProject;
}

const PortfolioProjectPage: NextPage<PortfolioProjectPageProps> = ({ project }) => {
  return (
    <Layout pageTitle={`Объект №${project.id}`}>
      <Container>
        <h2>Фото</h2>
        {project.photos.map(photo => (
          <img key={photo} src={photo} />
        ))}
        {project.plans.length && (
          <Fragment>
            <h2>Чертежи</h2>
            {project.plans.map(photo => (
              <img key={photo} src={photo} />
            ))}
          </Fragment>
        )}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PortfolioProjectPageProps> = async ({ params: { id } }) => {
  const project = await getStaticProject(Array.isArray(id) ? id[0] : id, 'portfolio');

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const staticProjects = await getStaticProjects();

  const paths = staticProjects.map(({ id }) => ({
    params: { id: String(id) },
  }));

  return { paths, fallback: 'blocking' };
};

export default PortfolioProjectPage;
