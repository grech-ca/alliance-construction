import { FC } from 'react';

import classnames from 'classnames';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  active?: boolean;
  external?: string;
  className?: string;
}

const Link: FC<LinkProps> = ({ active, external, className, children, ...linkProps }) => (
  <NextLink {...linkProps}>
    <a className={classnames('link', { active, external }, className)}>{children}</a>
  </NextLink>
);

export default Link;
