import { useCallback, ChangeEvent } from 'react';

import { useRouter } from 'next/router';

import queryString from 'query-string';

import { NextPage } from 'next';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { getProjects, GetProjectsData } from 'helpers/http';

import Layout from 'layouts/Layout';

import ProjectsFilter from 'components/admin/ProjectsFilter';

interface AdminProjectsPageProps extends GetProjectsData {}

const AdminProjectsPage: NextPage<AdminProjectsPageProps> = ({ total, page, data }) => {
  const { push, query, pathname } = useRouter();

  const handlePageChange = useCallback(
    async (event: ChangeEvent<unknown>, page: number) => {
      await push({
        pathname,
        query: {
          ...query,
          page,
        },
      });
    },
    [pathname, push, query],
  );

  return (
    <Layout type='admin' pageTitle='Проекты'>
      <ProjectsFilter />
      <Grid container spacing={4}>
        <Grid item container spacing={2}>
          {data?.map(({ id }) => (
            <Grid key={id} item xs={6} md={6} lg={3} xl={2}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 160 }}
                    image='https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                      Проект #{id}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        {total > 1 && (
          <Grid item container justifyContent='flex-end'>
            <Pagination page={page} onChange={handlePageChange} count={total} shape='rounded' />
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

AdminProjectsPage.getInitialProps = async ({ query }) => {
  const data = await getProjects(queryString.stringify(query));

  return data;
};

export default AdminProjectsPage;
