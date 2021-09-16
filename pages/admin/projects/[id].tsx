import { NextPage } from 'next';

import { ProjectModel } from 'server/models/project';

import Layout from 'layouts/Layout';

interface AdminProjectPageProps extends ProjectModel {}

const AdminProjectPage: NextPage<AdminProjectPageProps> = () => {
  return <Layout type='admin' />;
};

export default AdminProjectPage;
