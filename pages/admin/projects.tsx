import { FC } from 'react';

import Head from 'next/head';

import Sidebar from 'admin/common/Sidebar';
import CreateProject from 'admin/project/CreateProject';

import useModal from 'hooks/useModal';

import { useProjectsQuery } from 'generated/graphql';

const AdminProjectsPage: FC = () => {
  const { data, loading } = useProjectsQuery();
  const { projects } = data || {};
  const { open } = useModal('CreateProject');

  return (
    <div className='page admin'>
      <Head>
        <title>Проекты</title>
      </Head>
      <Sidebar />
      <main className='content'>
        {/* <div className='projects-filter'>
          <input type='text' placeholder='Номер продукта' />
        </div> */}
        <button onClick={open}>Добавить проект</button>
        <div className='projects-list'>
          {projects?.map(({ id, type }) => (
            <div key={id}>{id}</div>
          ))}
        </div>
      </main>
      <CreateProject />
    </div>
  );
};

export default AdminProjectsPage;
