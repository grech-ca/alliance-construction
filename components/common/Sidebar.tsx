import { FC } from 'react';

import Link from 'components/common/Link';

const Sidebar: FC = () => (
  <aside className='sidebar'>
    <div className='sidebar-header'>
      <b className='sidebar-title'>Панель Администратора</b>
    </div>
    <div className='sidebar-body'>
      <nav className='links'>
        <Link href='/admin/requests'>Заявки</Link>
        <Link href='/admin/projects'>Проекты</Link>
        <Link href='/admin/portfolio'>Портфолио</Link>
        <Link href='/admin/information'>Информация</Link>
      </nav>
    </div>
  </aside>
);

export default Sidebar;
