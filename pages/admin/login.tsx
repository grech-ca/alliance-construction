import { useCallback, useState } from 'react';

import { useRouter } from 'next/router';

import jwt, { JwtPayload } from 'jsonwebtoken';
import * as yup from 'yup';
import cookie from 'cookie';

import { NextPage } from 'next';
import Head from 'next/head';
import { Formik, FormikProps } from 'formik';

import LoadingOverlay from 'components/common/LoadingOverlay';

import { login } from 'helpers/http';

import { StyledLoginPage, Form, Heading, Field, Submit, FormWrapper } from 'styles/Login';

interface LoginValues {
  password: string;
}

const initialValues: LoginValues = {
  password: '',
};

const validationSchema = yup.object().shape({
  password: yup.string().required('Введите пароль'),
});

const LoginPage: NextPage = () => {
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async ({ password }: LoginValues) => {
      setIsLoading(true);

      try {
        await login(password);

        void push('/admin');
      } finally {
        setIsLoading(false);
      }
    },
    [push],
  );

  return (
    <StyledLoginPage>
      <Head>
        <title>Вход</title>
      </Head>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, setFieldValue, handleSubmit }: FormikProps<LoginValues>) => (
          <FormWrapper>
            <Form onSubmit={handleSubmit}>
              <Heading>Панель администратора</Heading>
              <Field
                autoFocus
                label='Пароль'
                type='password'
                value={values.password}
                onChange={event => setFieldValue('password', event.target.value)}
              />
              <Submit>Войти</Submit>
            </Form>
            {isLoading && <LoadingOverlay />}
          </FormWrapper>
        )}
      </Formik>
    </StyledLoginPage>
  );
};

export default LoginPage;
