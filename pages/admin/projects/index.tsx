import { FC, useState, useEffect, useCallback } from 'react';

import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import plural from 'plural-ru';
import queryString from 'query-string';

import Link from 'next/link';
import { Formik, Form } from 'formik';

import CreateProject from 'components/modals/CreateProject';

import useModal from 'hooks/useModal';

import { Project } from 'pages/api/projects';

import Layout from 'layouts/Layout';

import Image from 'components/common/Image';
import Search from 'components/common/Search';
import ProjectsFilter from 'components/admin/ProjectsFilter';

const numericOnly = (value: string, prev: string) => (isNaN(value as unknown as number) ? prev : value);

const AdminProjectsPage: FC = () => {
  const { open } = useModal('CreateProject');

  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = useCallback((params?: Record<string, string>) => {
    void fetch(`/api/projects${params && Object.keys(params).length ? `?${queryString.stringify(params)}` : ''}`)
      .then(res => res.json())
      .then((projectsData: Project[]) => {
        setProjects(projectsData);
      });
  }, []);

  useEffect(() => {
    void fetchProjects();
  }, [fetchProjects]);

  return (
    <Layout type='admin' pageTitle='Проекты'>
      <ProjectsFilter />
      <Grid container spacing={4}>
        <Grid item container spacing={2}>
          {Array.from(Array(12).keys()).map(key => (
            <Grid key={key} item xs={6} md={6} lg={3} xl={2}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 160 }}
                    image='https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                      Проект #{`${key}${String(Math.PI).slice(-2)}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item container justifyContent='flex-end'>
          <Pagination count={10} shape='rounded' />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AdminProjectsPage;
