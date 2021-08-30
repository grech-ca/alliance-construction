import { NextPageContext } from 'next';

const redirect = ({ res }: NextPageContext, path: string): void => {
  if (res) {
    res.writeHead(301, { Location: path });
    res.end();
  }
};

export default redirect;
