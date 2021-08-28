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
            <Link href='#'>Проекты</Link>
            <Link href='#'>Портфолио</Link>
            <Link href='#'>Проектирование</Link>
          </Column>
          <Column>
            <Link>Цены</Link>
            <Link>Контакты</Link>
          </Column>
        </Links>
        <Copyright>
          2015 – {currentYear} © Все права защищены | <Link href='#'>политика конфиденциальности</Link>
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
