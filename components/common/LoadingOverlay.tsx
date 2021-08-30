import { FC } from 'react';

import { CircularProgress } from '@material-ui/core';

import { StyledLoadingOverlay } from 'styles/Layout';

const LoadingOverlay: FC = () => (
  <StyledLoadingOverlay>
    <CircularProgress />
  </StyledLoadingOverlay>
);

export default LoadingOverlay;
