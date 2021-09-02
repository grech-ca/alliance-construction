import { NextPage } from 'next';

import Layout from 'layouts/Layout';

import withAuth from 'hocs/withAuth';

const AdminHomePage: NextPage = () => (
  <Layout type='admin' pageTitle='Панель Администратора'>
    <button>1</button>
    <button>1</button>
    <button>1</button>
    <button>1</button>
  </Layout>
);

export default withAuth(AdminHomePage);
