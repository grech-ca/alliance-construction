import { FC } from 'react';

import Link from 'components/common/Link';

const Header: FC = () => {
  return (
    <div className='header'>
      <div className='logo'>Alliance</div>
      <nav className='navigation'>
        <Link href='/'>Главная</Link>
        <Link href='/projects'>Проекты</Link>
        <Link href='/portfolio'>Портфолио</Link>
        <Link href='/designing'>Проектирование</Link>
        <Link href='/prices'>Цены</Link>
        <Link href='/contacts'>Контакты</Link>
      </nav>
      <span className='phone'>8 (863) 309-08-03</span>
    </div>
  );
};

export default Header;
