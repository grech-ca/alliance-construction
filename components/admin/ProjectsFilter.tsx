import { FC, Fragment, useState, useCallback } from 'react';

import { Grid, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import MuiSearchIcon from '@material-ui/icons/Search';

import OptionsInput, { InputOption } from 'components/admin/OptionsInput';

import { Search, SearchIcon, SearchInput } from 'styles/Admin';

enum Floors {
  One = 1,
  Two = 2,
}

enum ProjectType {
  Typical = 'typical',
  Individual = 'individual',
}

enum Area {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

const projectsTypeOptions: InputOption<ProjectType>[] = [
  {
    label: 'Типовые',
    value: ProjectType.Typical,
  },
  {
    label: 'Индивидуальные',
    value: ProjectType.Individual,
  },
];

const floorsOptions: InputOption<Floors>[] = [
  {
    label: '1 этаж',
    value: Floors.One,
  },
  {
    label: '2 этажа',
    value: Floors.Two,
  },
];

const areaOptions: InputOption[] = [
  {
    label: 'меньше 150м²',
    value: Area.Small,
  },
  {
    label: '150м² – 250м²',
    value: Area.Medium,
  },
  {
    label: 'больше 200м²',
    value: Area.Large,
  },
];

const ProjectsFilter: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [floors, setFloors] = useState<InputOption<Floors>['value'][]>([]);
  const [projectsType, setProjectsType] = useState<InputOption<ProjectType>['value']>(ProjectType.Typical);
  const [areas, setAreas] = useState<InputOption<Area>['value'][]>([]);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <Fragment>
      <Grid container spacing={4} justifyContent='space-between' alignItems='flex-end'>
        <Grid item container sm={12} justifyContent='space-between' alignItems='flex-end'>
          <Grid item>
            <Typography variant='body1' gutterBottom>
              Поиск
            </Typography>
            <Search>
              <SearchIcon as={MuiSearchIcon} />
              <SearchInput placeholder='Номер проекта' />
            </Search>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' onClick={openModal}>
              Добавить
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant='body1' gutterBottom>
            Тип проекта
          </Typography>
          <OptionsInput
            options={projectsTypeOptions}
            value={projectsType}
            onChange={value => setProjectsType(value as ProjectType)}
          />
        </Grid>
        <Grid item>
          <Typography variant='body1' gutterBottom>
            Количество этажей
          </Typography>
          <OptionsInput
            multiple
            options={floorsOptions}
            value={floors}
            onChange={value => setFloors(value as Floors[])}
          />
        </Grid>
        <Grid item>
          <Typography variant='body1' gutterBottom>
            Площадь
          </Typography>
          <OptionsInput multiple options={areaOptions} value={areas} onChange={value => setAreas(value as Area[])} />
        </Grid>
        <Grid item>
          <Button variant='contained' color='secondary'>
            Сбросить
          </Button>
        </Grid>
      </Grid>
      <Dialog open={modalOpen} onClose={closeModal}>
        <DialogTitle>Добавить проект</DialogTitle>
        <DialogContent>Form</DialogContent>
        <DialogActions>
          <Button>Отмена</Button>
          <Button variant='contained' color='primary'>
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ProjectsFilter;
