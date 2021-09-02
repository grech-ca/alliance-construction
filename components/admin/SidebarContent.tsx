import { FC, Fragment, useCallback } from 'react';

import { useRouter } from 'next/router';

import Cookies from 'js-cookie';

import Link from 'next/link';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InformationIcon from '@material-ui/icons/Info';
import ProjectsIcon from '@material-ui/icons/Home';
import PortfolioIcon from '@material-ui/icons/BusinessCenter';
import PricesIcon from '@material-ui/icons/AttachMoney';
import ContactsIcon from '@material-ui/icons/ContactMail';
import OrdersIcon from '@material-ui/icons/Group';
import LogOutIcon from '@material-ui/icons/MeetingRoom';

import { SvgIconComponent } from '@material-ui/icons';

import { SidebarIcon } from 'styles/Admin';
import { Spacer } from 'styles/Common';

interface SidebarLink {
  path: string;
  label: string;
  icon: SvgIconComponent;
}

const links: SidebarLink[] = [
  {
    path: 'info',
    icon: InformationIcon,
    label: 'Информация',
  },
  {
    path: 'projects',
    icon: ProjectsIcon,
    label: 'Проекты',
  },
  {
    path: 'portfolio',
    icon: PortfolioIcon,
    label: 'Портфолио',
  },
  {
    path: 'prices',
    icon: PricesIcon,
    label: 'Цены',
  },
  {
    path: 'contacts',
    icon: ContactsIcon,
    label: 'Контакты',
  },
  {
    path: 'orders',
    icon: OrdersIcon,
    label: 'Заявки',
  },
];

const SidebarContent: FC = () => {
  const { push } = useRouter();

  const logOut = useCallback(() => {
    Cookies.remove('authorization');
    return push('/admin/login');
  }, [push]);

  return (
    <Fragment>
      <Divider />
      <List>
        {links.map(({ path, label, icon }) => (
          <Link key={path} href={`/admin/${path}`}>
            <ListItem button component='a'>
              <ListItemIcon>
                <SidebarIcon as={icon} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Spacer />
      <Divider />
      <ListItem button onClick={logOut}>
        <ListItemIcon>
          <LogOutIcon />
        </ListItemIcon>
        <ListItemText>Выйти</ListItemText>
      </ListItem>
    </Fragment>
  );
};

export default SidebarContent;
