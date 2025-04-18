import React from "react";
import Image from "next/image";
const Feature = () => {
  return (
    <div className="">
      {/* // <!-- Features --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          {/* <!-- Stats --> */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Accuracy rate
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              99.95%
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              in fulfilling orders
            </p>
          </div>
          {/* <!-- End Stats --> */}

          {/* <!-- Stats --> */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Startup businesses
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              2,000+
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              partner with Preline
            </p>
          </div>
          {/* <!-- End Stats --> */}

          {/* <!-- Stats --> */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Happy customer
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
              85%
            </p>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              this year alone
            </p>
          </div>
          {/* <!-- End Stats --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* // <!-- End Features --> */}
      {/* <!-- Features --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            {/* <!-- Grid --> */}
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div className="col-span-4">
                <Image
                  className="rounded-xl"
                  src={`https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80`}
                  alt="Features Image"
                  width={400}
                  height={400}
                />
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-3">
                <Image
                  className="rounded-xl"
                  src={`https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80`}
                  alt="Features Image"
                  width={400}
                  height={400}
                />
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-5">
                <Image
                  className="rounded-xl"
                  src={`https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80`}
                  alt="Features Image"
                  width={400}
                  height={400}
                />
              </div>
              {/* <!-- End Col --> */}
            </div>
            {/* <!-- End Grid --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              {/* <!-- Title --> */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                  Collaborative tools to design user experience
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">
                  Use our tools to explore your ideas and make your vision come
                  true. Then share your work easily.
                </p>
              </div>
              {/* <!-- End Title --> */}

              {/* <!-- List --> */}
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      <span className="font-bold">Less routine</span> – more
                      creativity
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      Hundreds of thousands saved
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      Scale budgets{" "}
                      <span className="font-bold">efficiently</span>
                    </span>
                  </div>
                </li>
              </ul>
              {/* <!-- End List --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Features --> */}
    </div>
  );
};

export default Feature;
