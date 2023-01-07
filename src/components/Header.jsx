const Header = () => {
    return ( <>

    
{/* <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 transition duration-300 ease-in-out"> */}
    
{/* header-nav fixed w-full z-40 md:bg-opacity-90 transition duration-300 ease-in-out  backdrop-blur-sm border-gray-200 dark:bg-gray-800 px-4 lg:px-6 py-2.5 shadow-lg */}

<nav class=" header-nav fixed w-full z-40 bg-white  sm:px-4  dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 shadow-lg">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/> */}
      <span class="p-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">onlyfanserfolg.de</span>
  </a>
  <div class="flex md:order-2">


      <button type="button" class="mt-2 mb-2 text-lg text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply now</button>


      
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
      </li>
      <li>
        <a href="/#benefits" class=" block text-lg py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Benefits</a>
      </li>
      <li>
        <a href="/#testimonials" class="block text-lg py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Testimonial</a>
      </li>
      <li>
        <a href="/#contact" class="block text-lg py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
      <li>
        <a href="/#faqs" class="block text-lg py-2 pr-4 pl-3 text-gray-700  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">FAQs</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
{/* </div> */}


	

    </> );
}
 
export default Header;