import { FC, useCallback } from 'react';
import { useQuery, useMutation, QueryClient } from 'react-query';

import { snakeCase } from 'lodash';

import { Formik, Form } from 'formik';

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

  const createPost = useCallback((values: CreateProjectValues) => {
    const formData = new FormData();

    Object.entries<CreateProjectValues>(values).forEach(entry => {
      if (entry[0] === 'photos') {
        return entry[1].forEach(photo => formData.append('photos', photo));
      }

      if (typeof entry[1] === 'number') return formData.append(snakeCase(entry[0]), entry[1].toString());

      return formData.append(entry[0], entry[1]);
    });

    void fetch('/api/projects', {
      method: 'POST',
      body: formData,
    });
  }, []);

  return (
    <Modal name='CreateProject' label='Добавить проект'>
      <Formik initialValues={initialValues} onSubmit={createPost}>
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
