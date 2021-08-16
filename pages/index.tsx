import { FC, useState } from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Slider, { SliderVariant } from 'components/common/Slider';
import { Button, ButtonVariant } from 'components/common/Button';
import { IProject } from 'types/types';
import Link from 'components/common/Link';
import useWindowSize from 'hooks/useWindowSize';

const HomePage: FC = () => {
  const projects: IProject[] = [
    {
      id: 1,
      name: 'Name1',
      address: {
        city: 'moscow1',
        street: 'saurana1',
      },
      src: [
        'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80',
      ],
      href: '/',
    },
    {
      id: 2,
      name: 'Name2',
      address: {
        city: 'moscow2',
        street: 'saurana2',
      },
      src: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80',
      ],
      href: '/',
    },
    {
      id: 3,
      name: 'Name3',
      address: {
        city: 'moscow3',
        street: 'saurana3',
      },
      src: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80',
      ],
      href: '/',
    },
    {
      id: 4,
      name: 'Name4',
      address: {
        city: 'moscow4',
        street: 'saurana4',
      },
      src: [
        'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1046&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80',
      ],
      href: '/',
    },
    {
      id: 5,
      name: 'Name5',
      address: {
        city: 'moscow5',
        street: 'saurana5',
      },
      src: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80',
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      ],
      href: '/',
    },
    {
      id: 6,
      name: 'Name6',
      address: {
        city: 'moscow6',
        street: 'saurana6',
      },
      src: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80',
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      ],
      href: '/',
    },
  ];

  const pseudoProjects: IProject[] = [...projects];

  // cause nextjs
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const width = useWindowSize();

    defineProjectsCount(width);
  }

  function defineProjectsCount(width: number) {
    if (width < pseudoProjects.length * 210 + 200) {
      console.log('space!!!');
      pseudoProjects.pop();
      defineProjectsCount(width);
    }
  }

  const [activeProject, setActiveProject] = useState<IProject>(projects[0]);

  console.log(activeProject);

  return (
    <div className='landing'>
      <Header />
      <Slider slides={projects} variant={SliderVariant.project} />
      <div className='releasedProjects'>
        <div className='head'>
          <div className='title'>Реализованые проекты</div>
          <Link href='/'>Перейти в портфолио</Link>
        </div>
        <div className='project-list'>
          {pseudoProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                className='project-item'
                onClick={() => {
                  setActiveProject(projects[index]);
                }}
              >
                <img src={project.src[0]} alt='' />
              </div>
            );
          })}
        </div>
        <div className='project'>
          <Slider slides={activeProject.src} variant={SliderVariant.src} />
          <div className='content'>
            <div className='address'>{activeProject.address.city + ' ' + activeProject.address.street}</div>
            <Link href={activeProject.href}>More</Link>
            <div className='features'>features</div>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='left'>
          <div className='title'>О компании</div>
          <div className='content'>
            <div className='info'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus deserunt consequatur excepturi
                assumenda voluptates veniam et consequuntur rem! Molestias deleniti laboriosam eius soluta aspernatur.
                Nisi obcaecati corrupti ab eius?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus deserunt consequatur excepturi
                assumenda voluptates veniam et consequuntur rem! Molestias deleniti laboriosam eius soluta aspernatur.
                Nisi obcaecati corrupti ab eius?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus deserunt consequatur excepturi
                assumenda voluptates veniam et consequuntur rem! Molestias deleniti laboriosam eius soluta aspernatur.
                Nisi obcaecati corrupti ab eius?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus deserunt consequatur excepturi
                assumenda voluptates veniam et consequuntur rem! Molestias deleniti laboriosam eius soluta aspernatur.
                Nisi obcaecati corrupti ab eius?
              </p>
            </div>
            <Button variant={ButtonVariant.default}>Связаться</Button>
          </div>
        </div>
        <div className='right'>
          <img
            src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt=''
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
