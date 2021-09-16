import { FC, Fragment, useState, useCallback, useMemo, useEffect } from 'react';

import { useRouter } from 'next/router';

import { compact, debounce } from 'lodash';

import { Grid, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import MuiSearchIcon from '@material-ui/icons/Search';

import OptionsInput, { InputOption } from 'components/admin/OptionsInput';

import { Search, SearchIcon, SearchInput } from 'styles/Admin';

import { ProjectType, Area } from 'types/shared';

const projectsTypeOptions: InputOption<ProjectType>[] = [
  {
    label: 'Типовые',
    value: ProjectType.Exemplary,
  },
  {
    label: 'Индивидуальные',
    value: ProjectType.Individual,
  },
];

const floorsOptions: InputOption<number>[] = [
  {
    label: '1 этаж',
    value: 1,
  },
  {
    label: '2 этажа',
    value: 2,
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
  const { push, query, pathname } = useRouter();
  const { type = ProjectType.Exemplary, area, floors } = query;

  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState(query?.search ?? '');

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const handleReset = useCallback(() => push(pathname), [pathname, push]);
  const handleType = useCallback(
    type => void push({ pathname, query: { ...query, type, page: 1 } }),
    [pathname, push, query],
  );
  const handleArea = useCallback(
    area => void push({ pathname, query: { ...query, area, page: 1 } }),
    [pathname, push, query],
  );
  const handleFloors = useCallback(
    floors => void push({ pathname, query: { ...query, floors, page: 1 } }),
    [pathname, push, query],
  );

  const handleSearch = useCallback(({ target: { value } }) => {
    const numbersOnly = value
      .split('')
      .filter((char: string) => !isNaN(Number(char)))
      .join('');

    setSearch(numbersOnly);
  }, []);
  const debouncedSearch = useMemo(
    () =>
      debounce(() => {
        void push({ pathname, query: { ...query, search } });
      }, 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname, query, search],
  );

  useEffect(() => {
    if (search !== query.search) {
      debouncedSearch();
    }
  }, [search, query.search, debouncedSearch]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

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
              <SearchInput onChange={handleSearch} value={search} placeholder='Номер проекта' />
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
          <OptionsInput options={projectsTypeOptions} value={type} onChange={handleType} />
        </Grid>
        <Grid item>
          <Typography variant='body1' gutterBottom>
            Количество этажей
          </Typography>
          <OptionsInput multiple options={floorsOptions} value={floors} onChange={handleFloors} />
        </Grid>
        <Grid item>
          <Typography variant='body1' gutterBottom>
            Площадь
          </Typography>
          <OptionsInput multiple options={areaOptions} value={area} onChange={handleArea} />
        </Grid>
        <Grid item>
          <Button onClick={handleReset} variant='contained' color='secondary'>
            Сбросить
          </Button>
        </Grid>
      </Grid>
      <Dialog open={modalOpen} onClose={closeModal}>
        <DialogTitle>Добавить проект</DialogTitle>
        <DialogContent>Form</DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Отмена</Button>
          <Button variant='contained' color='primary'>
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ProjectsFilter;
