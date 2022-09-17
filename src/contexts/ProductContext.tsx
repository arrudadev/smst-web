import { createContext, ReactNode, useState } from 'react';

import { api } from '../services/api';

type Product = {
  id: number;
  name: string;
  barcode: string;
};

type ProductContextData = {
  products: Product[];
  loadProductList: () => Promise<void>;
  addProduct: (productName: string) => Promise<void>;
};

export const ProductContext = createContext({} as ProductContextData);

type ProductContextProviderProps = {
  children: ReactNode;
};

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const [products, setProducts] = useState([]);

  const loadProductList = async () => {
    const response = await api.get(`/products`);

    const { data } = response.data;

    setProducts(data);
  };

  const addProduct = async (productName: string) => {
    await api.post(`/products`, {
      productName,
    });

    await loadProductList();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loadProductList,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
