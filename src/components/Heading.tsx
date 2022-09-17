import { CheckIcon, LinkIcon } from '@heroicons/react/20/solid';

import { Container } from './Container';

export const Heading = () => {
  return (
    <div className="pt-10">
      <Container>
        <div className="flex item-left sm:items-center sm:justify-between flex-col sm:flex-row">
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Produtos
            </h1>
          </div>

          <div className="flex mt-5 sm:mt-0">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <LinkIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              View
            </button>

            <button
              type="button"
              className="inline-flex ml-3 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Publish
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
