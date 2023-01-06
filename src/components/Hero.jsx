const Hero = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900 py-8">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto py-8 place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Watch your Onlyfans earnings grow rapidly
            </h1>
            <p class="max-w-md mb-6 font-light text-gray-800 md:mb-8 text-lg md:text-xl dark:text-gray-400">
              Enjoy producing content for your Onlyfans while we manage
              everything else.
            </p>

            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-dark rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Apply now
              </button>
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/src/images/girl_beach.jpg" alt="girl on beach" />
            <div className="relative py-5 m-5 ">
              <div class="hidden md:block absolute w-20  top-20 p-2 bg-pink-200 rounded-lg bg-opacity-70">
                <img
                  class="w-8 h-8 rounded-full inline-block mr-2 astro-UXNKDZ4E"
                  alt="profile picture"
                  width="36"
                  height="36"
                  src="/src/images/t1.jpeg"
                  loading="lazy"
                  decoding="async"
                />

                <span>10/10. Just amazing.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
