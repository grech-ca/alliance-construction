import { FC } from 'react';

import { Container } from '@material-ui/core';

import Layout from 'layouts/Layout';

import separateNumber from 'helpers/separateNumber';

import { Heading } from 'styles/Layout';
import { ProjectList, Project, Photo, Info, ProjectNumber, InfoItem, InfoLabel, InfoValue } from 'styles/Projects';

interface Project {
  id: number;
  photos: string[];
  area: number;
  price: number;
}

const projects: Project[] = [
  {
    id: 1,
    photos: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    ],
    area: 120,
    price: 2400000,
  },
  {
    id: 2,
    photos: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    ],
    area: 120,
    price: 2400000,
  },
  {
    id: 3,
    photos: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    ],
    area: 120,
    price: 2400000,
  },
  {
    id: 4,
    photos: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    ],
    area: 120,
    price: 2400000,
  },
  {
    id: 5,
    photos: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    ],
    area: 120,
    price: 2400000,
  },
  {
    id: 6,
    photos: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80',
    ],
    area: 120,
    price: 2400000,
  },
];

const ProjectsPage: FC = () => {
  return (
    <Layout pageTitle='Проекты'>
      <Container>
        <Heading>Проекты</Heading>
        <ProjectList>
          {projects.map(({ id, photos: [photo], area, price }) => (
            <Project key={id} href={`/projects/${id}`}>
              <Photo src={photo} />
              <Info>
                <ProjectNumber>№{id}</ProjectNumber>
                <InfoItem>
                  <InfoLabel>Площадь</InfoLabel>
                  <InfoValue>{area} м²</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Цена</InfoLabel>
                  <InfoValue>{separateNumber(price)} ₽</InfoValue>
                </InfoItem>
              </Info>
            </Project>
          ))}
        </ProjectList>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
