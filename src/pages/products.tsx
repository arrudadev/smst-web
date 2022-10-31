import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Heading } from '../components/Heading';
import { ModalAddProduct } from '../components/ModalAddProduct';
import { Table } from '../components/Table';

const Products: NextPage = () => {
  return (
    <>
      <Header />

      <Heading />

      <Table />

      <ModalAddProduct />
    </>
  );
};

export default Products;
