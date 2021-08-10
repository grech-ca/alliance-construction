import { FC } from 'react';

import { useFormik, Form, FormikHelpers } from 'formik';

import Search from 'components/common/Search';

interface ProjectsFilterValues {
  searchId?: string;
}

interface ProjectsFilterProps {
  onSubmit: (values: ProjectsFilterValues, formikHelpers: FormikHelpers<ProjectsFilterValues>) => void | Promise<void>;
}

const initialValues: ProjectsFilterValues = {
  searchId: '',
};

const ProjectsFilter: FC<ProjectsFilterProps> = ({ onSubmit }) => {
  const { handleSubmit } = useFormik<ProjectsFilterValues>({ initialValues, onSubmit });

  return (
    <Form onSubmit={handleSubmit}>
      <Search name='searchId' />
    </Form>
  );
};

export default ProjectsFilter;
