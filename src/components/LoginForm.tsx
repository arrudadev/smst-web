export const LoginForm = () => {
  return (
    <div className="relative flex py-16 h-full w-full from-sky-50 to-gray-200 bg-gray-50">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <img
                  className="mx-auto h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Your Company"
                />

                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                  Smart Storage
                </h2>

                <p className="text-center text-xl font-bold tracking-tight text-gray-800">
                  Sign in to your account
                </p>
              </div>
              <div className="mt-10 grid space-y-4">
                <button
                  type="button"
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
        hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      className="absolute left-0 w-5"
                      alt="google logo"
                    />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
