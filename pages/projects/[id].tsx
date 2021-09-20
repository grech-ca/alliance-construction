import { Fragment } from 'react';

import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { Container } from '@material-ui/core';

import Layout from 'layouts/Layout';

import { getStaticProject, getStaticProjects, StaticProject } from 'data/projects';

interface ProjectPageProps {
  project: StaticProject;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <Layout pageTitle={`Проект №${project.id}`}>
      <Container>
        <h2>Фото</h2>
        {project.photos.map(url => (
          <img key={url} src={url} />
        ))}
        {project.plans.length && (
          <Fragment>
            <h2>Чертежи</h2>
            {project.plans.map(url => (
              <img key={url} src={url} />
            ))}
          </Fragment>
        )}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params: { id } }) => {
  return {
    props: {
      project: await Promise.resolve(getStaticProject(Array.isArray(id) ? id[0] : id)),
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

export default ProjectPage;
