import { FC } from 'react';

import Layout from 'layouts/Layout';

import withAuth from 'hocs/withAuth';

const AdminHomePage: FC = ({ children }) => <Layout type='admin'>{children}</Layout>;

export default withAuth(AdminHomePage);
