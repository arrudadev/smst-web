import { ArrowDownTrayIcon, TrashIcon } from '@heroicons/react/20/solid';

import { Barcode } from './Barcode';
import { Container } from './Container';

export const Table = () => {
  const products = [
    {
      id: 1,
      value: 890238409,
      name: 'product 1',
    },
    {
      id: 2,
      value: 1241234,
      name: 'product 2',
    },
    {
      id: 3,
      value: 34563456,
      name: 'product 3',
    },
    {
      id: 4,
      value: 3463456678,
      name: 'product 4',
    },
    {
      id: 5,
      value: 6789679,
      name: 'product 5',
    },
  ];

  return (
    <div className="pt-10">
      <Container>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Nome
                </th>
                <th scope="col" className="py-3 px-6">
                  Código de barras
                </th>
                <th scope="col" className="py-3 px-6" />
                <th scope="col" className="py-3 px-6" />
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-2/5">
                    {product.name}
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-2/5">
                    <Barcode value={`${product.value}`} />
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      title="Download"
                    >
                      <ArrowDownTrayIcon
                        className="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </button>
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      title="Apagar"
                    >
                      <TrashIcon
                        className="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};
