import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <nav className="scroll-smooth bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a onClick={() => navigate(location.pathname = "/")} className="flex items-center cursor-pointer">
            <img
              src="/src/images/logo.png"
              className="h-6 mr-3 sm:h-9"
              alt="Limitless Attention Logo"
            />


            
            <Link activeClass="active" smooth spy to="hero">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Limitless Attention
            </span>
            </Link>



          </a>
          <div className="flex md:order-2">
            <button
              onClick={() =>
                navigate(location.pathname === "/apply" ? "/" : "/apply")
              }
              type="button"
              className=" text-lg  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              {location.pathname === "/apply" ? "Back to Home" : "Apply Now"}
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className=" flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {location.pathname !== "/apply" && (<><li>
                <Link activeClass="active" smooth spy to="benefits"
                  className=" cursor-pointer text-lg block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="testimonials"
                  className="cursor-pointer text-lg block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="contact"
                  className="cursor-pointer text-lg block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to ="faqs"
                  className="cursor-pointer text-lg block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  FAQs
                </Link>
              </li></>)}
            </ul>
          </div>
  

        </div>
      </nav>

    </>
  );
};

export default Header;
