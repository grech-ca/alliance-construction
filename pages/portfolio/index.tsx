import { NextPage, GetStaticProps } from 'next';

import { Container } from '@material-ui/core';

import Layout from 'layouts/Layout';

import { getStaticProjects, StaticProject } from 'data/projects';

import { Heading } from 'styles/Layout';
import { ProjectList, ProjectItem, ProjectPhoto, ProjectName } from 'styles/Portfolio';

// interface PortfolioProject {
//   id: number;
//   photos: string[];
//   name: string;
// }

// const projects: PortfolioProject[] = [
//   {
//     id: 1,
//     name: 'КП Изумрудный 3',
//     photos: [
//       'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
//     ],
//   },
//   {
//     id: 2,
//     name: 'КП Изумрудный 3',
//     photos: [
//       'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
//     ],
//   },
//   {
//     id: 3,
//     name: 'КП Изумрудный 3',
//     photos: [
//       'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
//     ],
//   },
//   {
//     id: 4,
//     name: 'КП Изумрудный 3',
//     photos: [
//       'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
//     ],
//   },
//   {
//     id: 5,
//     name: 'КП Изумрудный 3',
//     photos: [
//       'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
//     ],
//   },
//   {
//     id: 6,
//     name: 'КП Изумрудный 3',
//     photos: [
//       'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
//     ],
//   },
// ];

interface PortfolioPageProps {
  projects: StaticProject[];
}

const PortfolioPage: NextPage<PortfolioPageProps> = ({ projects }) => (
  <Layout pageTitle='Портфолио'>
    <Container>
      <Heading>Портфолио</Heading>
      <ProjectList>
        {projects.map(({ id, photos: [photo] }) => (
          <ProjectItem key={id} href={`/portfolio/${id}`}>
            <ProjectPhoto src={photo} />
            {/* <ProjectName>{name}</ProjectName> */}
            <ProjectName>Объект №{id}</ProjectName>
          </ProjectItem>
        ))}
      </ProjectList>
    </Container>
  </Layout>
);

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
  const projects = await getStaticProjects('portfolio');

  return {
    props: {
      projects,
    },
  };
};

export default PortfolioPage;
