import { FC } from 'react';

import { Container } from '@material-ui/core';

import {
  StyledHeader,
  HeaderToolbar,
  HeaderLogo,
  HeaderNavigation,
  HeaderLink,
  HeaderPhone,
  Links,
} from 'styles/Header';

const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderToolbar>
        <Container>
          <HeaderNavigation>
            <HeaderLogo>СК «Альянс»</HeaderLogo>
            <Links>
              <HeaderLink href='/'>Главная</HeaderLink>
              <HeaderLink href='/projects'>Проекты</HeaderLink>
              <HeaderLink href='/portfolio'>Портфолио</HeaderLink>
              {/* <HeaderLink href='/prices'>Цены</HeaderLink> */}
              <HeaderLink href='/contacts'>Контакты</HeaderLink>
            </Links>
            <HeaderPhone href='tel:89614079777'>8 (961) 407-97-77</HeaderPhone>
          </HeaderNavigation>
        </Container>
      </HeaderToolbar>
    </StyledHeader>
  );
};

export default Header;
