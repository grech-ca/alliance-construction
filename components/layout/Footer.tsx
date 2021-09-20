import { FC } from 'react';

import moment from 'moment';

import { Link, Container } from '@material-ui/core';

import { StyledFooter, Column, Links, Copyright } from 'styles/Footer';

const Footer: FC = () => {
  const currentYear = moment().year();

  return (
    <StyledFooter>
      <Container>
        <Links>
          <Column>
            <Link href='/projects'>Проекты</Link>
            <Link href='/portfolio'>Портфолио</Link>
            {/* <Link href='#'>Проектирование</Link> */}
            <Link>Контакты</Link>
          </Column>
          <Column>{/* <Link>Цены</Link> */}</Column>
        </Links>
        <Copyright>
          2015 – {currentYear} © Все права защищены | <Link href='/privacy'>политика конфиденциальности</Link>
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
