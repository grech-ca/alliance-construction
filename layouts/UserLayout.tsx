import { FC, Fragment } from 'react';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import { StyledLayout } from 'styles/Layout';

const UserLayout: FC = ({ children }) => (
  <Fragment>
    <Header />
    <StyledLayout>{children}</StyledLayout>
    <Footer />
  </Fragment>
);

export default UserLayout;
