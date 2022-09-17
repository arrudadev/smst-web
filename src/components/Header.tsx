import { Container } from './Container';

export function Header() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="relative pt-6 pb-6">
        <Container>
          <nav
            className="relative flex items-center sm:h-10"
            aria-label="Global"
          >
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />

            <span className="font-medium text-gray-900 ml-5 text-2xl sm:text-3xl">
              Smart Storage
            </span>
          </nav>
        </Container>
      </div>
    </div>
  );
}
