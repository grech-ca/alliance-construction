import { useCallback } from 'react';

import { NextPage } from 'next';

import * as yup from 'yup';

import { Formik, FormikProps } from 'formik';
import { Grid, TextField, Button } from '@material-ui/core';

import Layout from 'layouts/Layout';

import { InformationForm } from 'styles/Admin';

interface InformationValues {
  phone: string;
  address: string;
  email: string;
  requisites: string;
  bic: string;
  director: string;
  bank: string;
  bankAccount: string;
}

const validatioSchema = yup.object().shape({
  phone: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().required(),
  requisites: yup.string().required(),
  bic: yup.string().required(),
  director: yup.string().required(),
  bank: yup.string().required(),
  bankAccount: yup.string().required(),
});

const initialValues: InformationValues = {
  phone: '',
  address: '',
  email: '',
  requisites: '',
  bic: '',
  director: '',
  bank: '',
  bankAccount: '',
};

const InformationPage: NextPage = () => {
  const handleSubmit = useCallback((values: InformationValues) => console.log(values), []);

  return (
    <Layout type='admin' pageTitle='Информация'>
      <Formik validationSchema={validatioSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }: FormikProps<InformationValues>) => (
          <InformationForm onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                <TextField label='Наименование' />
              </Grid>
              <Grid item>
                <TextField label='Телефон' />
              </Grid>
              <Grid item>
                <TextField label='Почта' />
              </Grid>
              <Grid item>
                <TextField label='ИНН / КПП' />
              </Grid>
              <Grid item>
                <TextField label='БИК' />
              </Grid>
              <Grid item>
                <TextField label='Директор' />
              </Grid>
              <Grid item>
                <TextField label='Банк получателя' />
              </Grid>
              <Grid item>
                <TextField label='Рассчетный счет' />
              </Grid>
              <Grid item>
                <TextField label='Юридический адрес' />
              </Grid>
              <Grid item lg={12}>
                <Button fullWidth variant='contained' color='primary' type='submit'>
                  Сохранить
                </Button>
              </Grid>
            </Grid>
          </InformationForm>
        )}
      </Formik>
    </Layout>
  );
};

export default InformationPage;
