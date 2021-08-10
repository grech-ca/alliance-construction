import { FC } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';

import Sidebar from 'admin/common/Sidebar';

const AdminProjectPage: FC = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <div className='page admin'>
      <Head>
        <title>Проект #{id}</title>
      </Head>
      <Sidebar />
    </div>
  );
};

export default AdminProjectPage;
