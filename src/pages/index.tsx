import type { NextPage } from 'next';

import { Heading } from '../components/Heading';
import { ModalAddProduct } from '../components/ModalAddProduct';
import { Table } from '../components/Table';

const Home: NextPage = () => {
  return (
    <>
      <Heading />

      <Table />

      <ModalAddProduct />
    </>
  );
};

export default Home;
