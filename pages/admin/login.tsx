import { useCallback } from 'react';

import { NextPage } from 'next';

import { Formik, FormikProps } from 'formik';
import { TextField } from '@material-ui/core';

import * as yup from 'yup';

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
  const handleSubmit = useCallback((values: LoginValues) => {
    console.log(values);
  }, []);

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ values, setFieldValue }: FormikProps<LoginValues>) => (
        <TextField value={values.password} onChange={event => setFieldValue('password', event.target.value)} />
      )}
    </Formik>
  );
};

export default LoginPage;
