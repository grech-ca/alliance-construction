import { FC } from 'react';

import Header from 'components/common/Header';

const HomePage: FC = () => (
  <div className='landing'>
    <Header />
    <header className='container mx-auto flex'>
      <div className='offer'>
        <h1 className='text-5xl flex-1'>Строительство и проектирование домов</h1>
        <div className='flex-1 h-1/2'>
          <img
            src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
            alt=''
            className='flex-1 h-full w-full object-cover rounded-3xl'
          />
        </div>
      </div>
    </header>
  </div>
);

export default HomePage;
