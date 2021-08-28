import { FC } from 'react';

import { Container } from '@material-ui/core';

import Layout from 'layouts/Layout';

import { Contacts, ContactsItem, ContactsLabel, ContactsValue } from 'styles/Contacts';
import { Heading } from 'styles/Layout';

interface Contact {
  label: string;
  value: string;
}

const contacts: Contact[] = [
  {
    label: 'Наименование',
    value: 'ООО "Альянс"',
  },
  {
    label: 'ИНН / КПП',
    value: '6168112072 / 616801001',
  },
  {
    label: 'Юридический адрес',
    value: '3440091, РФ, Ростовская область, г. Ростов-на-Дону, пер. Малиновского, 3Б, литер А, оф. 8',
  },
  {
    label: 'Банк получателя',
    value: 'ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ" г. Москва',
  },
  {
    label: 'Расчетный счет',
    value: '40702810602500068211',
  },
  {
    label: 'БИК',
    value: '044525999',
  },
  {
    label: 'Корр. счёт',
    value: '30101810845250000999',
  },
  {
    label: 'Директор',
    value: 'Серка Людмила Владимировна (на основании устава)',
  },
];

const ContactsPage: FC = () => (
  <Layout>
    <Container>
      <Heading>Контакты</Heading>
      <Contacts>
        {contacts.map(({ label, value }, index) => (
          <ContactsItem key={index}>
            <ContactsLabel>{label}</ContactsLabel>
            <ContactsValue>{value}</ContactsValue>
          </ContactsItem>
        ))}
      </Contacts>
    </Container>
  </Layout>
);

export default ContactsPage;
