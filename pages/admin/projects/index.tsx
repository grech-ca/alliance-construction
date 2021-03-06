import { FC, useState, useEffect, useCallback } from 'react';

import plural from 'plural-ru';
import queryString from 'query-string';

import Head from 'next/head';
import Link from 'next/link';
import { FaBed, FaBuilding } from 'react-icons/fa';
import { Formik, Form } from 'formik';

import Sidebar from 'admin/common/Sidebar';
import CreateProject from 'admin/project/CreateProject';

import useModal from 'hooks/useModal';

import { Project } from 'pages/api/projects';

import Image from 'components/common/Image';
import Search from 'components/common/Search';

const numericOnly = (value: string, prev: string) => (isNaN(value as unknown as number) ? prev : value);

const AdminProjectsPage: FC = () => {
  const { open } = useModal('CreateProject');

  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = useCallback((params?: Record<string, string>) => {
    void fetch(
      `/api/projects${params && Object.keys(params).length ? `?${queryString.stringify(params) as string}` : ''}`,
    )
      .then(res => res.json())
      .then((projectsData: Project[]) => {
        setProjects(projectsData);
      });
  }, []);

  useEffect(() => {
    void fetchProjects();
  }, [fetchProjects]);

  return (
    <div className='page admin'>
      <Head>
        <title>Проекты</title>
      </Head>
      <Sidebar />
      <main className='content'>
        <div className='projects-bar'>
          <Formik initialValues={{}} onSubmit={console.log}>
            <Form>
              <Search formatter={numericOnly} placeholder='Номер проекта' name='search' />
            </Form>
          </Formik>
          <div className='fill' />
          <button className='btn alternate add' onClick={open}>
            +
          </button>
        </div>
        <div className='projects-list'>
          {projects?.map(({ id, images, bedrooms, floors }) => (
            <Link key={id} href={`/admin/projects/${id}`}>
              <a className='project'>
                <Image src={`/api/images/${images[0]}`} alt={`Проект №${id}`} />
                <div className='project-info'>
                  <h3 className='project-name'>Проект №{id}</h3>
                  <ul className='project-features'>
                    <li className='project-feature'>
                      <FaBed />
                      {plural(bedrooms, '%d спальня', '%d спальни', '%d спален')}
                    </li>
                    <li className='project-feature'>
                      <FaBuilding />
                      {plural(floors, '%d этаж', '%d этажа', '%d этажей')}
                    </li>
                  </ul>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <CreateProject />
    </div>
  );
};

export default AdminProjectsPage;
