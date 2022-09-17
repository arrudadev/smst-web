import type { NextPage } from 'next';

import { Heading } from '../components/Heading';
import { Table } from '../components/Table';

const Home: NextPage = () => {
  return (
    <>
      <Heading />

      <Table />
    </>
  );
};

export default Home;
