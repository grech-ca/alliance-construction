import { FC, useCallback } from 'react';

import { Formik, Form, Field, FieldInputProps } from 'formik';

import Modal from 'components/common/Modal';

import useModal from 'hooks/useModal';

import { ProjectType, useCreateProjectMutation } from 'generated/graphql';

interface CreateProjectValues {
  type: ProjectType;
  bedrooms: number;
  floors: number;
  buildPrice: number;
  price: number;
}

const initialValues: CreateProjectValues = {
  type: ProjectType.Exemplary,
  bedrooms: 1,
  floors: 1,
  buildPrice: 1,
  price: 1,
};

const CreateProject: FC = () => {
  const { close } = useModal('CreateProject');

  const [createProject] = useCreateProjectMutation();

  const onSubmit = useCallback(
    values => {
      void createProject({
        variables: {
          data: values,
        },
      }).then(() => close());
    },
    [close, createProject],
  );

  return (
    <Modal name='CreateProject'>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field type='value' name='bedrooms' />
          <Field type='value' name='price' />
          <Field type='value' name='buildPrice' />
          <Field type='value' name='floors' />
          <Field name='photos'>
            {({ form: { setFieldValue } }: any) => (
              <input
                name='photos'
                type='file'
                multiple
                onChange={e => {
                  void setFieldValue('photos', e.currentTarget.files);
                }}
              />
            )}
          </Field>
          <button type='submit'>submit</button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default CreateProject;
