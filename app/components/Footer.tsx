import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
            © 2025 Copyright.
          </p>
        </div>
        {/* <!-- End Col --> */}

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Product
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Pricing
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Changelog
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Docs
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Download
              </a>
            </p>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Company
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                About us
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Blog
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Careers
              </a>{" "}
              <span className="inline text-blue-600 dark:text-blue-500">
                — We're hiring
              </span>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Customers
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Newsroom
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Sitemap
              </a>
            </p>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Resources
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Community
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Help & Support
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                eBook
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                What's New
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Status
              </a>
            </p>
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Developers
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Api
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Status
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                GitHub
              </a>{" "}
              <span className="inline text-blue-600 dark:text-blue-500">
                — New
              </span>
            </p>
          </div>

          <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
            Industries
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Financial Services
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                href="#"
              >
                Education
              </a>
            </p>
          </div>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}

    </footer>
  );
};

export default Footer;
