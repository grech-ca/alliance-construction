import { FC } from 'react';

import Head from 'next/head';

import Sidebar from 'admin/common/Sidebar';
import CreateProject from 'admin/project/CreateProject';

import useModal from 'hooks/useModal';

const AdminProjectsPage: FC = () => {
  const projects: any[] = [];
  const { open } = useModal('CreateProject');

  return (
    <div className='page admin'>
      <Head>
        <title>Проекты</title>
      </Head>
      <Sidebar />
      <main className='content'>
        <div className='projects-bar'>
          <input type='text' />
          <button className='btn default' onClick={open}>
            Добавить проект
          </button>
        </div>
        <div className='projects-list'>
          {projects?.map(({ id, type }, key) => (
            <div key={id}>
              {id} {key}
            </div>
          ))}
        </div>
      </main>
      <CreateProject />
    </div>
  );
};

export default AdminProjectsPage;
