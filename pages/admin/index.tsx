import { FC } from 'react';

import Layout from 'layouts/Layout';

const AdminHomePage: FC = ({ children }) => <Layout type='admin'>{children}</Layout>;

export default AdminHomePage;
