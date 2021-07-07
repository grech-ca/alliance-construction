import { FC, useCallback } from 'react';

import { Formik, Form, Field, FieldInputProps } from 'formik';

import Modal from 'components/common/Modal';
import ImageInput from 'admin/common/ImageInput';
import Input from 'components/common/Input';

import useModal from 'hooks/useModal';

interface CreateProjectValues {
  type: string;
  bedrooms: number;
  floors: number;
  buildPrice: number;
  price: number;
  photos: File[];
}

const initialValues: CreateProjectValues = {
  type: 'EXEMPLARY',
  bedrooms: 1,
  floors: 1,
  buildPrice: 1,
  price: 1,
  photos: [],
};

const CreateProject: FC = () => {
  const { close } = useModal('CreateProject');

  // const [createProject] = useCreateProjectMutation();

  // const onSubmit = useCallback(
  //   values => {
  //     void createProject({
  //       variables: {
  //         data: values,
  //       },
  //     }).then(() => close());
  //   },
  //   [close, createProject],
  // );

  return (
    <Modal name='CreateProject' label='Добавить проект'>
      <Formik initialValues={initialValues} onSubmit={console.log}>
        <Form className='create-project-form'>
          <div className='input-row'>
            <Input type='value' label='Спальни' name='bedrooms' />
            <Input type='value' label='Этажи' name='floors' />
          </div>
          <div className='input-row'>
            <Input type='value' label='Цена' name='price' />
            <Input type='value' label='Цена строительства' name='buildPrice' />
          </div>
          <ImageInput name='photos' multiple />
          <button className='submit' type='submit'>
            Создать
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default CreateProject;
