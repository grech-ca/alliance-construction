import { FC } from 'react';

import Link from 'components/common/Link';

const Footer: FC = () => {
  return (
    <footer>
      <div className='footer'>
        <nav className='navigation'>
          <Link href='/'>Главная</Link>
          <Link href='/projects'>Проекты</Link>
          <Link href='/portfolio'>Портфолио</Link>
          <Link href='/designing'>Проектирование</Link>
          <Link href='/prices'>Цены</Link>
          <Link href='/contacts'>Контакты</Link>
        </nav>
        <div className='contacts'>
          <span className='phone'>8 (863) 309-08-03</span>
          <span className='email'>info@aliance.com</span>
        </div>
      </div>
      <div className='instagram'>
        <Link href='/'>instagram</Link>
      </div>
      <div className='copyrights'>2015 – 2021 © Все права защищены | политика конфиденциальности</div>
    </footer>
  );
};

export default Footer;
