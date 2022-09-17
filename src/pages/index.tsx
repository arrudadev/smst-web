import type { NextPage } from 'next';

import { Heading } from '../components/Heading';
import { Modal } from '../components/Modal';
import { Table } from '../components/Table';

const Home: NextPage = () => {
  return (
    <>
      <Heading />

      <Table />

      <Modal />
    </>
  );
};

export default Home;
